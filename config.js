'use strict';

const { readFileSync } = require('fs');

const configFile = readFileSync('./config.json').toString();
let config = typeof configFile === 'string' ? JSON.parse(configFile) : configFile;

module.exports = config;
