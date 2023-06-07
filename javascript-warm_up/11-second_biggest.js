#!/usr/bin/node
const args = process.argv;
const numA = Number(args[2]);
const numB = Number(args[3]);
let 1stBig = numA;
let 2ndBig = numB;
if (args.length <= 3) {
  console.log(0);
} else {
  for (let a = 3; a < args.length; a++) {
    if (Number(args[a]) > 1stBig) {
      2ndBig = 1stBig;
      1stBig = Number(args[a]);
    }
    if (Number(args[a]) > @ndBig && Number(args[a]) < 1stBig) {
      2ndBig = Number(args[a]);
    }
  }
  console.log(2ndBig);
}
