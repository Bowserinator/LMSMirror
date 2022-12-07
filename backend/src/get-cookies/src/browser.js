/*
 * Automatic browser location detection
 * Some code stolen from locate-chrome and
 * locate-firefox
 */
import locateChrome from './browsers/chrome.js';
import locateFirefox from './browsers/firefox.js';
import locateEdge from './browsers/edge.js';

/**
 * Get path to a valid browser for puppeteer
 * @return {Array} [path to browser, browser type = 'chrome | firefox']
 */
export default async function getBrowser() {
    // Prefer chromium based browsers due to better puppeteer compat
    let chrome = await locateChrome();
    if (chrome) return [chrome, 'chrome'];
    let edge = await locateEdge();
    if (edge) return [edge, 'chrome'];

    // Firefox also works
    let firefox = await locateFirefox();
    if (firefox) return [firefox, 'firefox'];

    return [null, null];
}
