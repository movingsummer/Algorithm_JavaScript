class Queue {
  #front;
  #rear;
  #arr;

  constructor() {
    this.#front = 0;
    this.#rear = 0;
    this.#arr = [];
  }

  push(data) {
    this.#arr.push(data);
    this.#rear++;
  }

  pop() {
    return this.#arr[this.#front++];
  }

  top() {
    return this.#arr[this.#front];
  }

  get length() {
    return this.#rear - this.#front;
  }
}

const [n, k] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(' ')
  .map((v) => +v);
const ans = [];
const q = new Queue();
for (let i = 1; i <= n; i++) q.push(i);

while (q.length) {
  for (let i = 0; i < k - 1; i++) q.push(q.pop());

  ans.push(q.pop());
}

console.log(`<${ans.join(', ')}>`);