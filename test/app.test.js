const { describe, it } = require('mocha');
const { assert, expect } = require('chai');

const throwError = function () { throw Error('Some Error thrown'); }

describe('App', ()=> {

    const header = require('../src/app');

    it(`should not throw an error`, async () => {
        
        app.print();

        assert.doesNotThrow(() => { header.print() }, Error);

    });

});