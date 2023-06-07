#!/usr/bin/node

let output;
const arg = process.argv;
const argNum = Number(arg[2]);
if (argNum) {
  for (let a = 0; a < argNum; a++) {
    output = '';
    for (let i = 0; i < argNum; i++) {
      output += 'X';
    }
    console.log(output);
  }
} else {
  console.log('Missing size');
}
