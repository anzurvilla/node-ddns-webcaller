const { describe, it } = require('mocha');
const { assert, expect } = require('chai');

const throwError = function () { throw Error('Some Error thrown'); }

describe('Header', ()=> {

    const header = require('../../src/views/header');

    it(`print() should not throw an error`, async () => {
        
        assert.doesNotThrow(() => { header.print() }, Error);

    });

});