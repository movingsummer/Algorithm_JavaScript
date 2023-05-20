class Heap {
  #heap;
  constructor() {
    this.#heap = [0];
  }

  push(data) {
    let idx = this.#heap.length;
    this.#heap.push(data);

    while (idx != 1) {
      if (this.#heap[~~(idx / 2)] > data) {
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
      if (this.#heap[idx * 2] > this.#heap[idx * 2 + 1]) childIdx = idx * 2 + 1;
      else childIdx = idx * 2;

      if (data > this.#heap[childIdx]) {
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

const heap = new Heap();
const ans = [];

(require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .forEach((v) => {
    v = +v;
    if (v === 0) ans.push(heap.pop());
    else heap.push(v);
  });

console.log(ans.join('\n'));