#!/usr/bin/node

const arg = process.argv;

const argNum = Number(arg[2]);

if (argNum) {
  console.log(`My number: ${arg[2]}`);
} else {
  console.log('Not a number');
}
