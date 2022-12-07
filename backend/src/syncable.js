/**
 * A syncable object, can be converted to JSON data
 * This is an abstract class!
 */
export class Syncable {
    /**
     * Construct a syncable
     * @param {string} cookies Auth cookies
     */
    constructor(cookies) {
        if (new.target === Syncable)
            throw new TypeError('Syncable is abstract and cannot be constructed directly');
        this.cookies = cookies;
        this.lastSynced = -1;
        this.from({});
    }

    /** Update last synced to now */
    updateTimeSynced() {
        this.lastSynced = Date.now();
    }

    /**
     * Populate this with data, filling in defaults if missing
     * @param {object} data Object
     */
    from(data) {
        throw new Error('from() not implemented');
    }

    /**
     * Return an object representation, used for saving
     * @return {object} JS object
     */
    to() {
        throw new Error('to() not implemented');
        // eslint-disable-next-line no-unreachable
        return {};
    }
}
