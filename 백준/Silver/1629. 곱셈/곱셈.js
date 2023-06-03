const power = (a, b, c) => {
  a = BigInt(a);
  c = BigInt(c);
  let ret = 1n;

  while (b > 0) {
    if (b % 2) ret = (ret * a) % c;
    a = (a * a) % c;
    b = ~~(b / 2);
  }

  return ret % c;
};

console.log(
  power(
    ...(require('fs').readFileSync('/dev/stdin') + '')
      .trim()
      .split(' ')
      .map((v) => +v)
  ).toString(10)
);