const { describe, it } = require('mocha');
const { assert } = require('chai');

describe('Conf', () => {

    it(`getData() should return a valid config data from the local file`, async () => {
        const config = require('../../src/controllers/config');

        const configData = await config.getData();
        // console.log('configData',configData)

        assert.isObject(configData);
        assert.isNotEmpty(configData);
        assert.containsAllKeys(configData, ['url', 'printlogs']);
    });

});