import { testAll } from '../util.js';

export default async function() {
    // We only care about the chromium version of edge which only
    // exists at this path:
    if (process.platform === 'win32')
        return await testAll(['C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'])
    return null; // Unless Edge somehow gets ported to another OS
}