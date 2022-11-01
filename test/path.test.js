const { describe, it } = require('mocha');
const { assert, expect } = require('chai');

describe('Paths', ()=> {
    
    const path = require('path');
    const packageName = require(path.resolve('package.json')).name;

    it(`should return logs path contained: ${packageName}\\logs`, async () => {
        
        const filename = path.resolve('logs/FILENAME.log'); // path.join(path.resolve(),'logs/FILENAME.log');
        const basename = path.basename(filename);
        const dirname = path.dirname(filename);
        
        console.log('dirname',dirname);
        
        assert.isNotNull(dirname);
        assert.isString(dirname);
        expect(dirname).to.contain(`${packageName}\\logs`);
    });

});