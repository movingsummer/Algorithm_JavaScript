class Deque {
  #front;
  #rear;
  #dArr;

  constructor(len) {
    this.#dArr = new Array(len).fill(0);
    this.#front = ~~(len / 2);
    this.#rear = ~~(len / 2);
  }

  push_front(data) {
    this.#dArr[--this.#front] = data;
  }

  push_back(data) {
    this.#dArr[this.#rear++] = data;
  }

  pop_front() {
    return this.#dArr[this.#front++];
  }

  pop_back() {
    return this.#dArr[--this.#rear];
  }

  front() {
    return this.#dArr[this.#front];
  }

  back() {
    return this.#dArr[this.#rear - 1];
  }

  get length() {
    return this.#rear - this.#front;
  }
}

const circle = new Deque(1000000);
const [n, k, m] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(' ')
  .map((v) => +v);
const ans = [];
let cnt = 0;
let isClockWise = true;

for (let i = 1; i <= n; i++) circle.push_back(i);

while (circle.length) {
  for (let i = 0; i < k - 1; i++) {
    if (isClockWise) {
      circle.push_back(circle.pop_front());
    } else {
      circle.push_front(circle.pop_back());
    }
  }

  if (!isClockWise) circle.push_front(circle.pop_back());
  ans.push(circle.pop_front());
  cnt++;
  if (cnt === m) {
    isClockWise = !isClockWise;
    cnt = 0;
  }
}

console.log(ans.join('\n'));