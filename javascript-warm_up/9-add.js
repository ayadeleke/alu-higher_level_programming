#!/usr/bin/node
const args = process.argv;
const conA = Number(args[2]);
const conB = Number(args[3]);

function add (a, b) {
  console.log(a + b);
}

add(args[2], args[3]);
