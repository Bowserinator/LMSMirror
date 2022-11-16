import { execSync as exec } from 'child_process';
import { testAll, getWinPathDefault, getLinuxPathDefault } from '../util.js';
import userhome from 'userhome';

export default async function() {
    if (process.platform === 'darwin') {
        return await getOSXPath();
    } else if (process.platform === 'win32') {
        return await getWinPathDefault('\\Mozilla Firefox\\firefox.exe');
    } else {
        return await getLinuxPathDefault('firefox');
    }
}

async function getOSXPath() {
    const toExec = '/Contents/MacOS/Firefox';
    return await testAll([
        '/Applications/Firefox.app' + toExec,
        userhome(regPath.slice(1)),
        () => {
            try {
                return exec('mdfind \'kMDItemDisplayName == "Firefox" && kMDItemKind == Application\'').trim() + toExec
            } catch(e) { return null; }
        }
    ]);
}
