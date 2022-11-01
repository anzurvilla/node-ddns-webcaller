'use strict';

const prompts = require('prompts');

module.exports = {
    ask: async (questions) => await prompts(questions),
}
        
            