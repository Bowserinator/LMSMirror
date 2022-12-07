import fs from 'fs';
import { execSync as exec } from 'child_process';

/**
 * Test possible browser locations
 * @param {Array<Function | string>} arr Path, or function to exec that returns a path
 *                                       where the browser may exist 
 * @return {string | null} Path to browser or null if none exist
 */
export async function testAll(arr) {
    for (let test of arr) {
        let out = null;
        if (test instanceof Function)
            out = await test();
        else if (typeof test === 'string')
            out = fs.existsSync(test) ? test : null;
        if (out !== null)
            return out;
    }
    return null;
}

/**
 * Default windows path test
 * @param {string} winSuffix Suffix for path in AppData or ProgramFiles, ie \\Mozilla Firefox\\firefox.exe
 * @return {string | null} Path to browser if it exists or null otherwise
 */
export async function getWinPathDefault(winSuffix) {
    const prefixes = [
        process.env.LOCALAPPDATA,
        process.env.PROGRAMFILES,
        process.env['PROGRAMFILES(X86)']
    ];

    return await testAll([
        prefixes[0] + winSuffix,
        prefixes[1] + winSuffix,
        prefixes[2] + winSuffix
    ]);
}

/**
 * Default linux path test
 * @param {string} programName name to pass into the which command
 * @return {string | null} Path to browser if it exists or null otherwise
 */
export async function getLinuxPathDefault(programName) {
    try { return exec('which ' + programName).trim(); }
    catch(e) { return null; }
}
