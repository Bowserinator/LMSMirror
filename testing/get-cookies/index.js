import puppeteer from 'puppeteer-core';
import getBrowser from './src/browser.js';

const LMS_URL = 'https://lms.rpi.edu/';
const TIMEOUT = 7000; // 7 seconds

/**
 * Get login cookies for LMS
 * @param {string} USERNAME Username (RCSID)
 * @param {string} PASSWORD Password
 * @param {string} OTP One time pass for Duo (6 digits no spaces / other)
 * @return {string} Cookies encoded as a string of key=value;key=value,...
 */
export async function getLoginCookies(USERNAME, PASSWORD, OTP) {
    const [browserPath, browserType] = await getBrowser();
    if (browserPath === null)
        throw new Error('Failed to find a chrome or firefox executable!');

    const opts = {
        executablePath: browserPath,
        args: [
            '--no-sandbox', // For firefox
            '--disable-features=VizDisplayCompositor', // For firefox
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process'
        ],
        headless: true, // Set to true to avoid popup
    };

    // Firefox compat
    if (browserType === 'firefox')
        opts.product = 'firefox';

    const browser = await puppeteer.launch(opts);
    const page = await browser.newPage();

    // Block fonts, images and CSS for faster loading
    // Doesn't work on firefox
    if (browserType !== 'firefox') {
        page.setRequestInterception(true);
        page.on('request', async request => {
            if (['stylesheet', 'fetch', 'image', 'media', 'font'].includes(request.resourceType()))
                request.abort();
            else
                request.continue();
        });
    }

    // Go to LMS page
    await page.goto(LMS_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#agree_button');

    // Click the login button and wait for new page
    await page.evaluate(() => {
        document.getElementById('agree_button').click(); // Agree to cookies
        document.getElementById('loginRedirectProviderList').children[0].children[0].click();
    });
    await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#username');

    // Login
    await page.evaluate((USERNAME, PASSWORD) => {
        document.getElementById('username').value = USERNAME;
        document.getElementById('password').value = PASSWORD;
        document.querySelector('.form-element.form-button').click();
    }, USERNAME, PASSWORD);

    await page.waitForNavigation({ waitUntil: 'load', timeout: TIMEOUT });

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
        await frame.waitForNavigation({ timeout: TIMEOUT });
    } catch(e) {
        if (e.includes('Navigation timeout')) {
            browser.close();
            throw new Error(`Unable to login (incorrect Duo OTP)`);
        }
    }

    await frame.evaluate(OTP => {
        // Click enter a passcode button
        [...document.getElementsByTagName('button')]
            .filter(x => x.innerText.includes('Enter a Passcode'))[0].click();
        // Input OTP
        [...document.getElementsByTagName('input')]
            .filter(x => x.name === 'passcode' && x.type === 'text')[0].value = OTP;
        // Submit
        [...document.getElementsByTagName('button')]
            .filter(x => x.innerText.includes('Log In'))[0].click();
    }, OTP);

    // Wait till you are in LMS
    await page.waitForNavigation({ waitUntil: 'load' });
    await page.waitForFunction(`window.location.href.startsWith('https://lms.rpi.edu/')`);

    // Get cookies, use these in requests
    const cookies = await page.cookies();
    await browser.close();

    return cookies
        .map(c => `${c.name}=${c.value}`)
        .join(';');
}
