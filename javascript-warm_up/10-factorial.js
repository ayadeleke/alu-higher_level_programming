#!/usr/bin/node

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const args = process.argv;
const fact = parseInt(args[2]);

if (isNaN(fact) === true) {
  console.log(1);
} else {
  const result = factorial(fact);
  console.log(result);
}
