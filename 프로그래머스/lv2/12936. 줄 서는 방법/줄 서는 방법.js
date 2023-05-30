function solution(n, k) {
  const candidate = Array.from(Array(n), (_, i) => i + 1);
  const fac = [1n];
  for (let i = 1n, tot = 1n; i <= 20n; i++) {
    tot *= i;
    fac.push(tot);
  }

  const ans = [];
  let rem = BigInt(k - 1);

  for (let i = n - 1; i >= 0; i--) {
    const sh = ~~(rem / fac[i]);
    rem = rem % fac[i];
    ans.push(candidate[sh]);
    candidate.splice(Number(sh), 1);
  }

  return ans;
}