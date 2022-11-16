import prompt from 'password-prompt';
import fetch from 'node-fetch';

import { getLoginCookies } from './index.js';

console.log('Warning: password input will show ur password');
const USERNAME = await prompt('RCSID: ');
const PASSWORD = await prompt('Password: ');
const OTP = await prompt('Duo OTP: ');

const cookies = await getLoginCookies(USERNAME, PASSWORD, OTP);

console.log(cookies)

// Example get request
const response = await fetch('https://lms.rpi.edu/learn/api/public/v3/courses', {
    headers: { cookie: cookies }
});
const data = await response.json();
console.log('\nData from LMS API example:');
console.log(data.results.map(c => '- ' + c.name).join('\n'));
