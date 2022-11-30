import puppeteer from 'puppeteer-core';
import getBrowser from '../browser.js';

const DUO_URL = 'https://apex.cct.rpi.edu/apex/f?p=119';
const TIMEOUT = 7000; // 7 seconds

// TODO: save and activate secret?
// Helpful hints to user


// Default browser size
const WIDTH = 1200;
const HEIGHT = 720;

/**
 * Obtain a duo secret. A browser will open and user will be prompted
 * for login
 * @return {string} Duo secret
 */
export async function setupDuoSecret() {
    const [browserPath, browserType] = await getBrowser();
    if (browserPath === null)
        throw new Error('Failed to find a chrome or firefox executable!');

    const opts = {
        executablePath: browserPath,
        args: [
            '--no-sandbox', // For firefox
            '--disable-features=VizDisplayCompositor', // For firefox
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
            `--window-size=${WIDTH},${HEIGHT}`
        ],
        defaultViewport: {
            width: WIDTH,
            height: HEIGHT
        },
        headless: false
    };

    // Firefox compat
    if (browserType === 'firefox')
        opts.product = 'firefox';

    const browser = await puppeteer.launch(opts);
    const page = await browser.newPage();

    // Go to DUO page
    await page.goto(DUO_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForNavigation({ waitUntil: 'load', timeout: 0 });

    // Get Duo iframe
    let frame;
    let start = Date.now();
    while (!frame && Date.now() - start < TIMEOUT)
        frame = (await page.frames()).find(f => f.url().includes('.duosecurity.com/'));

    if (!frame) {
        browser.close();
        throw new Error(`Unable to login (incorrect username or password)`);
    }

    try {
        await frame.waitForNavigation();
    } catch(e) {
        if ((e + '').includes('Navigation timeout')) {
            browser.close();
            throw new Error(`Unable to login (Frame failed to load)`);
        }
    }

    /**
     * Await for a function to not error when evaluated in the iframe
     * @param {IFrame} frame
     * @param {Function} f Must be a function in the format document => ... exactly due to bad code
     */
    async function awaitFrameFunction(frame, f) {
        f = f.toString();
        console.log(f);
        await frame.evaluate(async f => {
            f = Function(f.replace('document =>', ''));
            return await new Promise(resolve => {
                let interval = setInterval(() => {
                    try {
                        // Click the "add new device button"
                        f();
                        clearInterval(interval);
                        resolve();
                    } catch(e) {}
                }, 50);
            });
        }, f);
    }

    // Click "add new device"
    await awaitFrameFunction(frame, document => document.getElementById('new-device').click());
    await frame.waitForNavigation();

    // Wait for user to duo auth (do nothing)
    console.log('await duo log');

    await frame.waitForNavigation();

    // Click add new tablet
    await awaitFrameFunction(frame, document => {
        console.log([...document.getElementsByTagName('label')].map(x=>x.innerText));
        [...document.getElementsByTagName('label')]
            .filter(x => x.innerText.includes('Tablet'))[0].click()
    });
    console.log('Clicked new tablet?')

    // Click continue
    await awaitFrameFunction(frame, document => [...document.getElementsByTagName('button')]
        .filter(x => x.innerText.includes('Continue'))[0].click());
    await frame.waitForNavigation();

    // Click android
    await awaitFrameFunction(frame, document => [...document.getElementsByTagName('label')]
        .filter(x => x.innerText.includes('Android'))[0].click());
    // Click continue
    await awaitFrameFunction(frame, document => [...document.getElementsByTagName('button')]
        .filter(x => x.innerText.includes('Continue'))[0].click());

    await frame.waitForNavigation();
    // Click "I have duo mobile"
    await awaitFrameFunction(frame, document => [...document.getElementsByTagName('button')]
        .filter(x => x.innerText.includes('I have Duo'))[0].click());

    await frame.waitForNavigation();

    const url = await frame.evaluate(() => {
        return [...document.getElementsByClassName('qr')][0].src;
    });
    console.log(url);

    // Wait till you are in LMS
    // try {
    //     await page.waitForNavigation({ waitUntil: 'load', timeout: TIMEOUT });
    // } catch(e) {
    //     if ((e + '').includes('Navigation timeout')) {
    //         browser.close();
    //         throw new Error(`Unable to login (Duo code incorrect)`);
    //     }
    // }
    // await browser.close();
}

setupDuoSecret()