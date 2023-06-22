class Heap {
  #heap;
  constructor(comp = (a, b) => a - b) {
    this.#heap = [0];
    this.comp = comp;
  }

  push(data) {
    let idx = this.#heap.length;
    this.#heap.push(data);

    while (idx != 1) {
      if (this.comp(this.#heap[~~(idx / 2)], data) > 0) {
        this.#heap[idx] = this.#heap[~~(idx / 2)];
        idx = ~~(idx / 2);
      } else break;
    }

    this.#heap[idx] = data;
  }

  top() {
    return this.#heap[1];
  }

  pop() {
    if (this.size === 0) return 0;
    const data = this.#heap[this.size];
    const retData = this.#heap[1];
    let idx = 1;

    while (idx * 2 + 1 <= this.size) {
      let childIdx = 0;
      if (this.comp(this.#heap[idx * 2], this.#heap[idx * 2 + 1]) > 0)
        childIdx = idx * 2 + 1;
      else childIdx = idx * 2;

      if (this.comp(data, this.#heap[childIdx]) > 0) {
        this.#heap[idx] = this.#heap[childIdx];
        idx = childIdx;
      } else break;
    }

    this.#heap[idx] = data;
    this.#heap.pop();
    return retData;
  }

  get size() {
    return this.#heap.length - 1;
  }
}

const [[n], snow] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));
let ans = 0;
const pq = new Heap((a, b) => b - a);
snow.forEach((v) => pq.push(v));

while (pq.size > 1) {
  const [fir, sec] = [pq.pop(), pq.pop()];
  ans += sec;
  pq.push(fir - sec);
}

ans += pq.pop();

if (ans > 1440) console.log(-1);
else console.log(ans);
