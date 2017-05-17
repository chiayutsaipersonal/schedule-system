import dotenv from 'dotenv';
import express from 'express';

import logger from './utilities/logger.js';
import system from './config/system.js';
import db from './models/database.js';

const app = express();
const main = express.Router();
app.use(`/${system.reference}`, main);

// default routing error handlers
dotenv.config(); // loads .env file from root of project
if (app.get('env') === 'development') {
    app.use((error, request, response, next) => {
        logger.error('DEFAULT DEVELOPMENT ERROR HANDLER MIDDLEWARE TRIGGERED');
        response.status(error.status || 500);
        response.json({
            message: error.message,
            error: error
        });
    });
}
if (app.get('env') === 'production') {
    app.use((error, request, response, next) => {
        logger.error('DEFAULT PRODUCTION ERROR HANDLER MIDDLEWARE TRIGGERED');
        response.status(error.status || 500);
        response.json({
            message: error.message,
            error: {}
        });
    });
}

// reference routes
main.use('/', require('./routes/reference/common.js')); // common reference tables

db.initialize().then(() => { // initialize database models
    return db.JobTypes.create({
        reference: '新開發案',
        active: true,
        displaySequence: 0
    }).then(() => {
        app.listen(system.server.port, (error) => { // start backend server
            if (error) {
                logger.error(`error starting ${system.reference} server: ${error}`);
            } else {
                logger.info(`${system.reference} server is in operation... (${system.server.baseUrl})`);
            }
        });
    });
}).catch((error) => {
    logger.error(`${system.reference} server could not initialize database: ${error}`);
});

/*
import bodyParser from 'body-parser';
import cors from 'cors';
import exphbs from 'express-handlebars';

import morgan from 'morgan';
import path from 'path';

import { port, serverUrl, systemReference } from './config/server.js';
import { statusReport } from './utilities/statusReport.js';
import { sequelize } from './config/database.js';

main.use(cors());
main.use(morgan('dev'));
main.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
main.use(bodyParser.json()); // parse application/json
main.use('/', express.static(path.join(__dirname, '/../public'))); // frontend client server route
main.use('/bower_components', express.static(path.join(__dirname, '/../bower_components'))); // serve bower packages

// Handlebars templating engine test route
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '/../public/layouts'),
    partialsDir: path.join(__dirname, '/../public/partials')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/../public'));
app.set('layouts', path.join(__dirname, '/../public/layouts'));
app.set('partials', path.join(__dirname, '/../public/partials'));
const appTitle = require('./config/server.js').appTitle;
main.get('/templateTest', (request, response) => {
    return response.status(200).render('templateTest', {
        title: appTitle
    });
});

// data routes
// main.use('/', require('./routes/data/smartsheet/workspaces.js'));
// main.use('/', require('./routes/data/initialize.js'));
// main.use('/', require('./routes/data/referenceTables.js'));
// main.use('/', require('./routes/data/clients.js'));
// main.use('/', require('./routes/data/jobs.js'));

// utility routes
// main.use('/', require('./routes/utility/login.js'));
// main.use('/', require('./routes/utility/status.js'));

*/
