#!/usr/bin/node

const args = process.argv;

const argNum = Number(args[2]);
if (argNum) {
  console.log('My number': ${args[2]});
} else {
  console.log('Not a number');
}
