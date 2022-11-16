import { execSync as exec } from 'child_process';
import { testAll, getWinPathDefault, getLinuxPathDefault } from '../util.js';
import userhome from 'userhome';

export default async function() {
    if (process.platform === 'darwin') {
        return await getOSXPath();
    } else if (process.platform === 'win32') {
        return await getWinPathDefault('\\Google\\Chrome\\Application\\chrome.exe');
    } else {
        return await getLinuxPathDefault('google-chrome');
    }
}

async function getOSXPath() {
    const toExec = '/Contents/MacOS/Google Chrome';
    return await testAll([
        '/Applications/Google Chrome.app' + toExec,
        userhome(regPath.slice(1)),
        () => {
            try {
                return exec('mdfind \'kMDItemDisplayName == "Google Chrome" && kMDItemKind == Application\'').trim() + toExec
            } catch(e) { return null; }
        }
    ]);
}
