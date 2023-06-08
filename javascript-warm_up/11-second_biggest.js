#!/usr/bin/node

const args = process.argv;
const numA = Number(args[2]);
const numB = Number(args[3]);
let firstBig = numA;
let secondBig = numB;

if (args.length <= 3) {
  console.log(0);
} else {
  for (let a = 3; a < args.length; a++) {
    if (Number(args[a]) > firstBig) {
      secondBig = firstBig;
      firstBig = Number(args[a]);
    } else if (Number(args[a]) > secondBig && Number(args[a]) < firstBig) {
      secondBig = Number(args[a]);
    }
  }
  console.log(secondBig);
}
