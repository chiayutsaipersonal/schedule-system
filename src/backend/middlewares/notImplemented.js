import system from '../config/system.js';

module.exports = (request, response, next) => {
    response.status(501);
    next(`${request.protocol}://${system.server.host}:${system.server.port}${request.originalUrl} has not been implemented`);
};
