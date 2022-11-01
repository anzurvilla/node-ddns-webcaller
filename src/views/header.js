'use strict';

module.exports = {
    print: () => {
        const fs = require('fs');
        const path = require('path');
        
        // Clear the terminal screen if possible
        const clear = require('clear');
        clear();
        
        // Import figlet to print the main header
        const figlet = require('figlet');
        // Load the Standard font to use in the header
        const fontFilename = path.resolve(__dirname+'/../../assets/fonts/Standard.flf');
        // Parse the font by file
        figlet.parseFont('Standard', fs.readFileSync(fontFilename, 'utf8'));
        // Print the Header
        console.log('\x1b[34m'); // set color to the text style console
        console.log(figlet.textSync('······················', {font: 'Standard'}));
        console.log(figlet.textSync('DDNS\nWebcaller', {font: 'Standard'}));
        console.log(figlet.textSync('······················', {font: 'Standard'}));
        console.log('\x1b[0m'); // reset text style console
    },
}

/**
 * 
 * Colors reference:
 *
 * Reset = "\x1b[0m"
 * Bright = "\x1b[1m"
 * Dim = "\x1b[2m"
 * Underscore = "\x1b[4m"
 * Blink = "\x1b[5m"
 * Reverse = "\x1b[7m"
 * Hidden = "\x1b[8m"
 * 
 * FgBlack = "\x1b[30m"
 * FgRed = "\x1b[31m"
 * FgGreen = "\x1b[32m"
 * FgYellow = "\x1b[33m"
 * FgBlue = "\x1b[34m"
 * FgMagenta = "\x1b[35m"
 * FgCyan = "\x1b[36m"
 * FgWhite = "\x1b[37m"
 * 
 * BgBlack = "\x1b[40m"
 * BgRed = "\x1b[41m"
 * BgGreen = "\x1b[42m"
 * BgYellow = "\x1b[43m"
 * BgBlue = "\x1b[44m"
 * BgMagenta = "\x1b[45m"
 * BgCyan = "\x1b[46m"
 * BgWhite = "\x1b[47m"
 *
*/