'use strict';

// Import the logger
const logger = require('./utils/logger');

// Print the header
const header = require('./views/header');
header.print();

// Get the param from argv to set if it needs to reset the config data
const resetConfig = process.argv[2]=='reset' ? true : false;

// Get the config data
const config = require('./controllers/config');
config.getData(resetConfig).then(configData=>{

    if (configData.printlogs) {
        logger.info(`DDNS-Config file loaded: ${JSON.stringify(configData)}`, configData.printlogs);
    }

    // Start the task to update the DDNS IP
    const ddns = require('./controllers/ddns');
    const started = ddns.start(configData);
    if (configData.printlogs && started) console.log('App started successfully.')
})
.catch(err=>{
    logger.error(err.message||err, true);
});
