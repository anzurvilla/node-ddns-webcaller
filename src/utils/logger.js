'use strict';

// Import logger packages
const winston = require('winston');
require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
    filename: require('path').resolve('./logs/%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m', // megabytes
    maxFiles: '14d' // days
});

const logger = winston.createLogger({
    transports: [ transport ]
});

const self = module.exports = {
    // Get the current datetime from the computer
    getCurrentDateTime: () => {
        // Import moment and set lang
        const moment = require('moment');
        moment.locale('en');
        // return the local date and time
        return moment.utc().local().format('YYYY-MM-DD HH:mm:ss').toString();
    },

    info: (message, printConsole=false) => {
        logger.info({datetime: self.getCurrentDateTime(), message});
        if (printConsole) console.info('\x1b[36m♦', self.getCurrentDateTime(), message, '\x1b[0m');
    },
    
    warn: (message, printConsole=false) => {
        logger.warn({datetime: self.getCurrentDateTime(), message});
        if (printConsole) console.warn('\x1b[33m▲', self.getCurrentDateTime(), message, '\x1b[0m');
    },
    
    error: (message, printConsole=false) => {
        logger.error({datetime: self.getCurrentDateTime(), message});
        if (printConsole) console.error('\x1b[31m☀', self.getCurrentDateTime(), message, '\x1b[0m');
    },
};
