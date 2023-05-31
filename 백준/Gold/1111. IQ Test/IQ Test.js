const divisor = (n) => {
  const ret = [];

  for (let i = 1; i * i <= Math.abs(n); i++) {
    if (n % i === 0) {
      ret.push(i);
      ret.push(-i);
      ret.push(~~(n / i));
      ret.push(-~~(n / i));
      if (i * i === n) {
        ret.pop();
        ret.pop();
      }
    }
  }

  ret.push(0);
  return ret;
};

const [[n], nums] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));
let ans = 'B';
if (n > 2) {
  const t_div = divisor(nums[2] - nums[1]);
  let cnt = 0;

  for (let idx = 0; idx < t_div.length; idx++) {
    const a = t_div[idx];

    const b = nums[2] - nums[1] * a;
    let flag = true;

    for (let i = 1; i < n; i++) {
      if (nums[i - 1] * a + b !== nums[i]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      ans = nums[nums.length - 1] * a + b;
      cnt++;
    }
    if (cnt > 1) break;
  }

  if (cnt > 1) ans = 'A';
} else if (n === 2 && nums[0] === nums[1]) ans = nums[0];
else ans = 'A';

console.log(ans);