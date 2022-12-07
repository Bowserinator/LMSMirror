// Handle API requests
import fetch from 'node-fetch';
import { LMS_URL } from './config.js';

/**
 * Perform a GET API Request
 * @param {string} endpoint Part after /learn/api/public (no starting /)
 * @param {string} cookies cookie string
 * @return {object | null} Returns result of API, or null if not authenticated
 * @throws When endpoint 404
 */
export async function getAPIRequest(endpoint, cookies) {
    const response = await fetch(`${LMS_URL}learn/api/public/${endpoint}`, {
        headers: { cookie: cookies }
    });
    const data = await response.json();
    if (data.status === 404)
        throw new Error(`Invalid endpoint: ${endpoint}, returned 404`);
    if (data.status === 401)
        return null; // Reauth
    return data;
}

// eslint-disable-next-line valid-jsdoc
/**
 * Perform a POST API Request
 * @param {string} endpoint No starting /
 * @param {string} cookies cookie string
 * @param {object} body Body content
 * @param {object} headers Headers to merge
 * @return {[string, object | null]} New cookie, result of API, or null if not authenticated
 * @throws When endpoint 404
 */
export async function postAPIRequest(endpoint, cookies, body, headers) {
    const response = await fetch(`${LMS_URL}${endpoint}`, {
        method: 'post',
	    body: JSON.stringify(body),
        headers: {
            cookie: cookies,
            ...headers
        }
    });

    if (response.status === 404)
        throw new Error(`Invalid endpoint: ${endpoint}, returned 404`);
    if (response.status === 401 || response.status === 403)
        return [cookies, null]; // Reauth

    const newCookie = response.headers.get('set-cookie') || cookies;
    const data = await response.json();
    return [newCookie, data];
}
