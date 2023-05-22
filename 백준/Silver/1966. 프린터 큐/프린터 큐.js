class Queue {
  #front;
  #rear;
  #arr;
  #mx;

  constructor() {
    this.#front = 0;
    this.#rear = 0;
    this.#arr = [];
    this.#mx = [-Infinity, 0];
  }

  push(data) {
    this.#arr[this.#rear++] = data;
    if (data[0] > this.#mx[0]) this.#mx[0] = data[0];
  }

  pop() {
    if (this.#arr[this.#front][0] === this.#mx[0])
      this.#mx[0] =
        Math.max(
          ...this.#arr.slice(this.#front + 1, this.#rear).map((v) => v[0])
        ) || -Infinity;
    return this.#arr[this.#front++];
  }

  top() {
    return this.#arr[this.#front];
  }

  get length() {
    return this.#rear - this.#front;
  }

  get max() {
    return this.#mx;
  }
}

const input = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
let t = +input[0];
let curLine = 1;
let ans = [];

while (t--) {
  const [n, m] = input[curLine].split(' ').map((v) => +v);
  const q = new Queue();
  input[curLine + 1]
    .split(' ')
    .forEach((v, i) => q.push(i === m ? [+v, 1] : [+v, 0]));
  curLine += 2;
  let tmp = 1;

  while (q.length) {
    const v = q.top();
    if (q.max[0] > v[0]) q.push(q.pop());
    else if (v[1] === 1) {
      ans.push(tmp);
      break;
    } else {
      q.pop();
      tmp++;
    }
  }
}

console.log(ans.join('\n'));