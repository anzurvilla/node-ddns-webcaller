const { describe, it } = require('mocha');
const { assert } = require('chai');

describe('Filer', () => {
    
    const filer = require('../../src/utils/filer');
    const path = require('path');

    it(`getCurrentDirectoryBase() should return the package name`, async () => {
        
        const currentDirBase = filer.getCurrentDirectoryBase();
        const packageName = require(path.resolve('package.json')).name;
        
        assert.isNotNull(currentDirBase);
        assert.equal(currentDirBase, packageName);
    });
    
    it(`directoryExists() should return true while the README.md file exists`, async () => {
        assert.isTrue(filer.directoryExists(path.resolve()));
        assert.isTrue(filer.directoryExists(path.resolve('README.md')));
    });
    
    it(`getDataFromFile() should return the contained data from the README.md file`, async () => {
        const fileData = filer.getDataFromFile(path.resolve('README.md'));
        assert.isNotNull(fileData);
        assert.isNotEmpty(fileData);
        assert.isString(fileData);
    });

    it(`saveDataToFile() should return true as long as it was saved`, async () => {
        const dataToSave = 'Tested OK.';
        assert.isNotEmpty(dataToSave);
        assert.isString(dataToSave);
        
        const filename = 'test.txt';
        const saved = filer.saveDataToFile(dataToSave.toString(), path.resolve(filename));
        assert.isTrue(saved);

        const dataSaved = filer.getDataFromFile(path.resolve(filename));
        assert.isNotNull(dataSaved);
        assert.isNotEmpty(dataSaved);
        assert.equal(dataSaved, dataToSave);
    });

});