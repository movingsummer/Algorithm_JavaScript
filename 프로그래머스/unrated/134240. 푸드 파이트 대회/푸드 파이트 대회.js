const solution = food =>  [...(food.slice(1).map((v, i) => (i + 1 + '').repeat(~~(v / 2))).join('') + '0'),].concat(food.slice(1).map((v, i) => (i + 1 + '').repeat(~~(v / 2))).reverse()).join('');

