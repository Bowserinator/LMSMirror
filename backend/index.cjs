const apiServer = require('express-api-server');
 
const options = {
    baseUrlPath: '/api',
    isCompressionEnabled: false,
    isGracefulShutdownEnabled: true,
    port: 9999,
    isSslEnabled: false, // No need on localhost
    cors: false
};

/**
 * Init all routes
 * @param {*} app
 * @param {*} options
 */
function initRoutes(app, options) {
    // Set up routes off of base URL path
    app.use(options.baseUrlPath, [
        require('./todo-routes.cjs')
    ]);
};
 
apiServer.start(initRoutes, options);
