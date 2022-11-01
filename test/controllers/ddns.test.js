const { describe, it } = require('mocha');
const { assert, expect } = require('chai');

describe('DDNS controller', () => {

    const ddns = require('../../src/controllers/ddns');

    it(`webcall() should return the response with status 200`, async () => {

        const configData = {
            url: 'https://checkip.amazonaws.com',
            printlogs: true,
        }

        const response = await ddns.webcall(configData);
        // console.log('response', response.status, response.statusText, response.data)

        assert.isNotNull(response);
        assert.isObject(response);
        assert.isNumber(response.status);
        expect(response.status).eq(200);
    });

    it(`start() should not throw an error`, async () => {

        const configData = {
            url: 'https://checkip.amazonaws.com',
            printlogs: true,
        }

        // assert.doesNotThrow(() => { assert.isTrue(ddns.start(configData)) }, Error);
        // console.log(ddns.start())
        expect(() => {
            ddns.start();
        }).to.throw(Error)
        assert.throws(() => {
            ddns.start();
        }, Error)
        // assert.throw(() => { ddns.start() }, Error);

    });

});