import puppeteer from 'puppeteer-core';
import prompt from 'password-prompt';
import fetch from 'node-fetch';

const LMS_URL = 'https://lms.rpi.edu/';

(async () => {
    console.log('Warning: password input will show ur password');
    const USERNAME = await prompt('RCSID: ');
    const PASSWORD = await prompt('Password: ');
    const OTP = await prompt('Duo OTP: ');

    const browser = await puppeteer.launch({
        // Change this to your chrome install
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        headless: false, // Set to true to avoid popup
        args: [
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process'
        ],
        ignoreDefaultArgs: ['--disable-extensions']
    });
    const page = await browser.newPage();

    // Block fonts, images and CSS for faster loading
    page.setRequestInterception(true);
    page.on('request', async request => {
        if (['stylesheet', 'fetch', 'image', 'media', 'font'].includes(request.resourceType()))
            request.abort();
        else
            request.continue();
    });

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
    await page.waitForNavigation({ waitUntil: 'load' });

    // Get Duo iframe
    let frame;
    while (!frame) frame = (await page.frames()).find(f => f.url().includes('.duosecurity.com/'));
    await frame.waitForNavigation();

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
    console.log('Cookies:\n', cookies);

    await browser.close();

    // Example get request
    const response = await fetch('https://lms.rpi.edu/learn/api/public/v3/courses', {
        headers: {
            cookie: cookies
                .map(c => `${c.name}=${c.value}`)
                .join(';')
        }
    });
    const data = await response.json();
    console.log('\nData from LMS API example:');
    console.log(data.results.map(c => '- ' + c.name).join('\n'));
})();
