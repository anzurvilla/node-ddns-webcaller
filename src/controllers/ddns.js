'use strict';

const logger = require('../utils/logger');

const self = module.exports = {

    // Send request to call the update process
    webcall: async (config) => {
        var response;
        try { 
            // Validate the defined variables from the config-file
            if (!config) throw Error('DDNS Configuration is undefined');
            if (!config.url) throw Error('DDNS URL to webcall is undefined');

            if (config.printlogs) logger.info('Requesting the webcall ...', config.printlogs);

            // Send the request to update the DDNS
            const axios = require('axios');
            response = await axios.get(config.url);
    
            // Updated successfully
            if (response.status=='200') {
                if (config.printlogs) logger.info(`DDNS webcall requested. Response: ${response.status} ${response.statusText}. ${response.data}`, config.printlogs);
                else logger.info(`Response data: ${response.data}`, config.printlogs);
            }
            else {
                logger.warn(`${response.status?'Status-code ♯'+response.status+': ':''}${response.statusText}. Failed update: the DDNS coulnd't be updated. ${response.data}`, config.printlogs);
            }
        } catch (err) {
            logger.error(`${err.response.status?'Status-code ♯'+err.response.status+': ':''}${err.response.statusText||err.message||err}`, config.printlogs);
        } finally {
            return response;
        }
    },

    // start main process
    start: (config) => {
        try {
            ab
            if (!config) throw Error('Config is undefined');
            else if (!config.cronjob) {
                if (config.printlogs) {
                    logger.info('DDNS Webcaller started.', config.printlogs);
                }
                self.webcall(config);
            }
            // Schedule the CronJob
            else {
                 // Import the CronJob
                const cron = require('node-cron');
                if (!cron.validate(config.cronjob)) throw Error('Cronjob syntax is invalid');
                if (!config.timezone) throw Error('Timezone is undefined');
                // Schedule the task to send the webcall request with the config
                cron.schedule(
                    config.cronjob,
                    async () => self.webcall(config),
                    {
                        scheduled: true,
                        timezone: config.timezone
                    }
                );
                logger.info('DDNS Webcaller task scheduled.', true);
                if (config.printlogs) console.log(logger.getCurrentDateTime(),'∞','Waiting the execution of the scheduled task ...')
            }
            return true;
        } catch (err) {
            logger.error(err.message||err, true);
        }
    },

}
