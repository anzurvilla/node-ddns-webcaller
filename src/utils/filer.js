const fs = require('fs');
const path = require('path');

const self = module.exports = {

    getCurrentDirectoryBase: () => path.basename(process.cwd()),

    directoryExists: (filePath) => fs.existsSync(filePath),

    getDataFromFile: (filePath) => {
        try {
            if (self.directoryExists(filePath))
                return fs.readFileSync(filePath, 'utf8');
            else return ;
        } catch (err) {
            throw Error(err);
        }
    },

    saveDataToFile: (data, filePath) => {
        try {
            fs.writeFileSync(filePath, data)
            return true;
        } catch (err) {
            throw Error(err);
        }
    }
    
};
