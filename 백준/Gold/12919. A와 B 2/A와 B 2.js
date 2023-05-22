class Queue {
  #front;
  #rear;
  #arr;
  constructor(length) {
    this.#front = 0;
    this.#rear = 0;
    this.#arr = new Array(length);
  }

  push = (item) => {
    this.#arr[this.#rear++] = item;
  };
  pop = () => {
    this.#front++;
  };
  top = () => this.#arr[this.#front];

  get length() {
    return this.#rear - this.#front;
  }
}

const [s, t] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
let ans = 0;
const map = new Map();
const q = new Queue(500000);
q.push(t);

while (q.length) {
  const cur = q.top();
  q.pop();
  if (cur === s) {
    ans = 1;
    break;
  }
  if (cur.length < s.length) break;
  for (let i = 0; i < 2; i++) {
    let dCur;
    if (i === 0) {
      if (cur[cur.length - 1] === 'A') dCur = cur.slice(0, cur.length - 1);
      else continue;
    } else {
      if (cur[0] === 'B')
        dCur = cur
          .split('')
          .reverse()
          .slice(0, cur.length - 1)
          .join('');
      else continue;
    }

    if (map.get(dCur) || 0) continue;
    map.set(dCur, 1);
    q.push(dCur);
  }
}

console.log(ans);