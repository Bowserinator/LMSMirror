
import { getLoginCookies } from './get-cookies/index.js';
import { mergeCookieStr } from './get-cookies/cookies.js';

import { Syncable } from './syncable.js';
import { postAPIRequest } from './api.js';
import { LMS_URL } from './config.js';




class LMS extends Syncable {
    constructor(cookies) {
        super(cookies);
    }

    async update() {
        // Hack for private API
        // All the auth is handled by puppeteer
        let XSRF_TOKEN = this.cookies.split('xsrf:')[1].split(';')[0];
        const PRIVATE_API_HEADERS = {
            'Content-Type': 'application/json',
            'Host': LMS_URL.split('//')[1].split('/')[0],
            'Origin': LMS_URL,
            'Referer': LMS_URL,
            'X-Blackboard-XSRF': XSRF_TOKEN,
        };
        let PRIVATE_POST_BODY = {
            'providers': {},
            'forOverview': false,
            'retrieveOnly': false,
            'flushCache': false
        };

        // First request gets providers and preps for 2nd
        let [newCookie, temp] = await postAPIRequest('learn/api/v1/streams/ultra',
            this.cookies, PRIVATE_POST_BODY, PRIVATE_API_HEADERS);
        let tempProviders = {};
        for (let key of temp['sv_providers'])
            tempProviders[key['sp_provider']] = key;

        // Update parameters and update cookie
        // Both are necessary!
        PRIVATE_POST_BODY.retrieveOnly = true;
        PRIVATE_POST_BODY.providers = tempProviders;
        this.cookies = mergeCookieStr(this.cookies, newCookie)

        // Get all the data now
        let data;
        [newCookie, data] = await postAPIRequest('learn/api/v1/streams/ultra',
            this.cookies, PRIVATE_POST_BODY, PRIVATE_API_HEADERS);

        // Extract useful info from this big JSON
        const courses = data['sv_extras']['sx_courses'];
        const announcements = data['sv_streamEntries'];

        console.log(courses)
    }

    from(data) {

    }

    to() {
    }
}

// Put your cookies here
let l = new LMS(``)
l.update();
