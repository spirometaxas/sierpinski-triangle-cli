#!/usr/bin/env node
const sierpinski = require('./index.js');

const printUsage = function() {
    console.log('\nUsage:\n' + '  $ sierpinski-triangle-cli <n>\n' + '  $ sierpinski-triangle-cli <n> <scale>\n');
}

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    if (params[0] && !isNaN(params[0]) && parseInt(params[0]) > 0) {
        var n = parseInt(params[0]);
        var s = undefined;
        if (params[1]) {
            if (!isNaN(params[1]) && parseInt(params[1]) >= n) {
                s = parseInt(params[1]);
            } else {
                console.log('\n<scale> should be a number greater than <n>');
                printUsage();
            }
        } else {
            s = n;
        }
        if (n && s) {
            console.log(sierpinski.create(n, s));
        }
    } else {
        console.log('\n<n> should be a positive number');
        printUsage();
    }
} else {
    printUsage();
}