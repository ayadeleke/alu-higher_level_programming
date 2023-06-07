#!/usr/bin/node

function Factorial (num) {
    if (num === 1) {
      return 1;
    } else {
      return (num * Factorial(num - 1));
    }
}
const fact= parseInt(prompt("Enter any argument:"));
if (isNaN(fact) === true) {
    console.log(1);
} else {
    const result = Factorial(fact);
    console.log(result);
}
