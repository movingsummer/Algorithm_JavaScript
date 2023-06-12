function solution(n) {
  const hanoi = (k, from, to, by) => {
    if (k === 1) {
      return `${from} ${to}\n`;
    }

    return (
      hanoi(k - 1, from, by, to) +
      hanoi(1, from, to, by) +
      hanoi(k - 1, by, to, from)
    );
  };

  return hanoi(n, 1, 3, 2);
}

const n = +(require('fs').readFileSync('/dev/stdin') + '');
if (n > 20) console.log((2n ** BigInt(n) - 1n).toString(10));
else {
  console.log(2 ** n - 1);
  console.log(solution(n));
}