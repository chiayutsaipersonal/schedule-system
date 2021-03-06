import fs from 'fs';
import moment from 'moment-timezone';
import winston from 'winston';

import system from '../config/system.js';

const loggingDirectory = 'logs';

if (!fs.existsSync(loggingDirectory)) { // create if logging directory does not exist
    fs.mkdirSync(loggingDirectory);
}

const logger = new(winston.Logger)({
    transports: [
        // colorize the output to the console
        new(winston.transports.Console)({
            timestamp: () => moment().format('YYYY-MM-DD HH:mm:ss'),
            colorize: true,
            level: 'silly'
        }),
        new(winston.transports.File)({
            filename: `${loggingDirectory}/serverOperation.log`,
            timestamp: () => moment().format('YYYY-MM-DD HH:mm:ss'),
            level: system.environment === 'production' ? 'info' : 'silly'
        })
    ]
});

module.exports = logger;
