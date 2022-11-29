import prompt from 'password-prompt';
import fetch from 'node-fetch';
import { getLoginCookies } from './index.js';


document.getElementById('button').onclick = function(){
    
    
    const USERNAME = document.getElementById('un').value;
    const PASSWORD = document.getElementById('pw').value;
    const OTP = document.getElementById('duo').value;
    
    alert(USERNAME)
    
    const cookies = getLoginCookies(USERNAME, PASSWORD, OTP);

    fetch("http://127.0.0.1:5000/receiver",
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(cookies)}).then(res=>{
            if(res.ok){ return res.json() }
            else { alert("Something is wrong") }
        }).then(jsonResponse=>{
            console.log(jsonResponse)
        }).catch((err)=> console.error(err));


}

// Example get request
//const response = await fetch('https://lms.rpi.edu/learn/api/public/v3/courses', {
//    headers: { cookie: cookies }
//});
//const data = await response.json();
//console.log('\nData from LMS API example:');
//console.log(data.results.map(c => '- ' + c.name).join('\n'));
