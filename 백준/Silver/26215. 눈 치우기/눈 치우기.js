class Heap {
  #comp;
  #size;
  #pqArr;

  constructor(comp = (a, b) => a - b) {
    this.#size = 0;
    this.#pqArr = [undefined];
    this.#comp = comp;
  }

  push(data) {
    this.#pqArr.push(data);
    this.#size++;
    let idx = this.#size;

    while (idx !== 1) {
      if (this.#comp(data, this.#pqArr[~~(idx / 2)]) < 0) {
        this.#pqArr[idx] = this.#pqArr[~~(idx / 2)];
        idx = ~~(idx / 2);
      } else break;
    }

    this.#pqArr[idx] = data;
  }

  pop() {
    const retElem = this.#pqArr[1];
    const lastElem = this.#pqArr[this.#size--];
    let pIdx = 1;
    let cIdx;

    while (true) {
      cIdx =
        this.#comp(this.#pqArr[pIdx * 2], this.#pqArr[pIdx * 2 + 1]) < 0
          ? pIdx * 2
          : pIdx * 2 + 1;

      if (cIdx > this.#size) break;

      if (this.#comp(lastElem, this.#pqArr[cIdx]) > 0) {
        this.#pqArr[pIdx] = this.#pqArr[cIdx];
        pIdx = cIdx;
      } else break;
    }

    this.#pqArr[pIdx] = lastElem;

    return retElem;
  }

  top() {
    return this.#pqArr[1];
  }

  get _size() {
    return this.#size;
  }
}

const [[n], snow] = (require('fs').readFileSync('/dev/stdin') + '').trim().split(/\r?\n/).map(v=>v.split(' ').map(v2=>+v2));
const pq = new Heap((a, b) => b - a);
let time = 0;
snow.forEach(v=>pq.push(v));

while (pq._size > 1) {
    const [fir, sec] = [pq.pop(), pq.pop()];
    time += sec;
    pq.push(fir - sec);
}

time += pq.pop();
if (time > 1440) time = -1;
console.log(time);