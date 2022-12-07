/**
 * Convert cookie string to obj
 * @param {string} str Cookie string key=val;key2=val2
 * @return {obj} Object representation of cookie
 */
export function cookieStrToObj(str) {
    let r = {};
    for (let pair of str.split(';')) {
        let split = pair.split('=');
        r[split[0].trim()] = split[1];
    }
    return r;
}

/**
 * Convert cookie obj to string
 * @param {array | object} obj Cookie object [{name: '', value: ''},... or {key: val}
 * @return {string} Cookie string key=val;key2=val2
 */
export function cookieObjToStr(obj) {
    if (!Array.isArray(obj)) {
        let keys = Object.keys(obj);
        obj = keys.map(x => { return { name: x, value: obj[x] }; })
    }
    return obj
        .map(c => `${c.name}=${c.value}`)
        .join(';');
}

/**
 * Merge cookie2 string onto cookie1
 * @param {string} cookie1
 * @param {string} cookie2
 * @return {string} Merged cookie str
 */
export function mergeCookieStr(cookie1, cookie2) {
    cookie1 = cookieStrToObj(cookie1);
    cookie2 = cookieStrToObj(cookie2);
    return cookieObjToStr({...cookie1, ...cookie2});
}
