#!/usr/bin/node

const args = process.argv;
const numA = Number(args[2]);

function factorial (n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

if (numA) {
  console.log(factorial(numA));
} else {
  console.log(1);
}
