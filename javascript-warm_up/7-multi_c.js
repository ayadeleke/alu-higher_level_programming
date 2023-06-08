#!/usr/bin/node

const args = process.argv;

const argNum = Number(args[2]);
if (argNum) {
  for (let a = 0; a < argNum; a++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
