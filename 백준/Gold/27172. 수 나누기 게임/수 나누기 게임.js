const getDivisors = (n) => {
  const divisors = [1];

  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) {
      divisors.push(i);
      divisors.push(~~(n / i));
    }

    if (i * i === n) divisors.pop();
  }

  return divisors;
};

const [[n], playerCards] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));

const playerScore = new Array(1000001).fill(0);
const isThereNum = new Array(1000001).fill(0);
playerCards.forEach((writtenNum) => (isThereNum[writtenNum] = 1));
playerCards.forEach((writtenNum) => {
  getDivisors(writtenNum).forEach((divisor) => {
    if (isThereNum[divisor]) {
      playerScore[divisor]++;
      playerScore[writtenNum]--;
    }
  });
});

console.log(playerCards.map((v) => playerScore[v]).join(' '));