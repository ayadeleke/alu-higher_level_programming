#!/usr/bin/node
const args = process.argv;
const fileA = args[2];
const fileB = args[3];
const fileC = args[4];

const fs = require('fs');

const dataA = fs.readFileSync(fileA, 'utf8');
const dataB = fs.readFileSync(fileB, 'utf8');
fs.writeFileSync(fileC, dataA + dataB);
