#!/usr/bin/env node
const sierpinski = require('./index.js');

const printUsage = function() {
    console.log('\n' + 
                ' Usage:\n' + 
                '   $ sierpinski-triangle-cli <n>\n' + 
                '   $ sierpinski-triangle-cli <n> <size>\n' + 
                '\n' + 
                ' Options:\n' + 
                '   --inverse, -i            Draw the inverse Sierpinski Triangle\n' + 
                '   --character=<character>  Draw using 1 specific character');
}

const getFlags = function(params) {
    let flags = [];
    if (params) {
        for (let i = 0; i < params.length; i++) {
            if (params[i].startsWith('-')) {
                flags.push(params[i]);
            }
        }
    }
    return flags;
}

const getValues = function(params) {
    let values = [];
    if (params) {
        for (let i = 0; i < params.length; i++) {
            if (!params[i].startsWith('-')) {
                values.push(params[i]);
            }
        }
    }
    return values;
}

const drawInverse = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && (flags[i].toLowerCase() === '-i' || flags[i].toLowerCase() === '--inverse')) {
            return true;
        }
    }
    return false;
}

const getCharacter = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && flags[i].toLowerCase().startsWith('--character=')) {
            const character = flags[i].substring(12);
            if (character) {
                if (character.length === 1) {
                    return character;
                } else {
                    console.log('\n Warning: Please provide just 1 character.  Example: --character=*');
                }
            } else {
                console.log('\n Warning: Please provide 1 character.  Example: --character=*');
            }
        }
    }
    return undefined;
}

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    const values = getValues(params);
    const flags = getFlags(params);
    if (values[0] && !isNaN(values[0]) && parseInt(values[0]) >= 0) {
        var n = parseInt(values[0]);
        var s = undefined;
        if (values[1]) {
            if (!isNaN(values[1]) && parseInt(values[1]) >= n) {
                s = parseInt(values[1]);
            } else {
                console.log('\n <size> should be a number greater than or equal to <n>');
                printUsage();
            }
        } else {
            s = n;
        }

        if (n !== undefined && s !== undefined) {
            console.log(sierpinski.create(n, { scale: s, inverse: drawInverse(flags), character: getCharacter(flags) }));
        }
    } else {
        console.log('\n <n> should be a number greater than or equal to 0');
        printUsage();
    }
} else {
    printUsage();
}