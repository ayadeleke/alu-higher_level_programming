const args = process.argv.slice(2).map(Number);

if (args.length <= 1) {
  console.log(0);
} else {
  let firstBig = Math.max(...args);
  let secondBig = -Infinity;

  for (let i = 0; i < args.length; i++) {
    if (args[i] < firstBig && args[i] > secondBig) {
      secondBig = args[i];
    }
  }

  if (secondBig === -Infinity) {
    console.log(0);
  } else {
    console.log(secondBig);
  }
}
