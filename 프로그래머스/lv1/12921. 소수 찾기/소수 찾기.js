function solution(n) {
  const prime = new Array(n + 1).fill(1);
  prime[0] = prime[1] = 0;

  for (let i = 2; i * i <= n; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j += i) prime[j] = 0;
    }
  }

  return prime.filter((v) => v === 1).length;
}