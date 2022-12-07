
import { getLoginCookies } from './get-cookies/index.js';
import { Syncable } from './syncable.js';
import { getAPIRequest } from './api.js';

class Course extends Syncable {
    constructor(cookies, courseID) {
        super(cookies);
        this.courseID = courseID;
    }

    async updateCourseHome() {
        this.announcements = await getAPIRequest(`v1/courses/${this.courseID}/announcements`, this.cookies);
    }

    updateFileDirectory() {

    }

    updateAllPaths() {

    }

    updateFile() {

    }

    from(data) {
        this.name = data.name || 'Unknown Course';
        this.announcements = data.announcements || [];
    }

    to() {
        throw new Error('fromJSON not implemented');
    }
}