#!/usr/bin/env node

'use strict';

let flags = [];
let platform = process.platform;
let enclose = require('../../').exec;
let windows = platform === 'win32';
let extension = windows ? '.exe' : '';

try {
  require.resolve('npm');
} catch (error) {
  console.log('Failed to require(\'npm\')');
  console.log('Please run \'npm install\' here');
  process.exit(1);
}

flags.push('--output', './npm' + extension);
flags.push('./index.js');
enclose(flags);