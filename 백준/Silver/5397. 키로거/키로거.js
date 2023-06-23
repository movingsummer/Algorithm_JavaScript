class linkedList {
  #cur;
  #pre;
  #nxt;
  #cursor;

  constructor() {
    this.#cur = [-1];
    this.#pre = [-1];
    this.#nxt = [-1];
    this.#cursor = 0;
  }

  insert(num) {
    this.#cur.push(num);
    const idx = this.#cur.length - 1;
    this.#nxt[idx] = this.#nxt[this.#cursor];
    this.#pre[idx] = this.#cursor;

    if (this.#nxt[this.#cursor] !== -1)
      this.#pre[this.#nxt[this.#cursor]] = idx;
    this.#nxt[this.#cursor] = idx;
    this.#cursor = idx;
  }

  erase() {
    if (this.#cursor !== 0) {
      if (this.#nxt[this.#cursor] !== -1)
        this.#pre[this.#nxt[this.#cursor]] = this.#pre[this.#cursor];
      this.#nxt[this.#pre[this.#cursor]] = this.#nxt[this.#cursor];
      this.#cursor = this.#pre[this.#cursor];
    }
  }

  traverse() {
    let idx = this.#nxt[0];
    const ret = [];

    while (idx !== -1) {
      ret.push(this.#cur[idx]);
      idx = this.#nxt[idx];
    }

    return ret;
  }

  moveRight() {
    if (this.#nxt[this.#cursor] !== -1) this.#cursor = this.#nxt[this.#cursor];
  }

  moveLeft() {
    if (this.#pre[this.#cursor] !== -1) this.#cursor = this.#pre[this.#cursor];
  }
}

const [t, ...strings] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const ans = [];

strings.forEach((string) => {
  const L = new linkedList();
  string.split('').forEach((c) => {
    if (c === '<') L.moveLeft();
    else if (c === '>') L.moveRight();
    else if (c === '-') L.erase();
    else L.insert(c);
  });

  ans.push(L.traverse().join(''));
});

console.log(ans.join('\n'));