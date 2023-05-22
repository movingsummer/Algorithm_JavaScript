const nums = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((v) => +v)
  .sort((a, b) => a - b);
let ans = [];
if (nums.length === 1) {
  const v = nums[0];
  ans = ans.concat([v, v, v, 0]);
} else {
  const map = new Map();
  nums.forEach((v) => map.set(v, (map.get(v) || 0) + 1));
  const tmp = Array.from(map.entries()).sort((a, b) =>
    a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
  );

  ans.push((nums.reduce((tot, v) => tot + v, 0) / nums.length).toFixed(0));
  ans.push(nums[~~(nums.length / 2)]);
  ans.push(tmp[0][1] === tmp[1][1] ? tmp[1][0] : tmp[0][0]);
  ans.push(nums[nums.length - 1] - nums[0]);
  if (ans[0] === '-0') ans[0] = 0;
}
console.log(ans.join('\n'));