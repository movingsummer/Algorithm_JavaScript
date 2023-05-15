class Queue {
  constructor(len) {
    this.arr = new Array(len).fill(undefined);
    this.front = 0;
    this.rear = 0;
  }

  push(data) {
    this.arr[this.rear++] = data;
  }

  pop() {
    return this.arr[this.front++];
  }

  top() {
    return this.arr[this.front];
  }

  length() {
      return this.rear - this.front
  }  
}

function solution(maps) {
    const [n, m] = [maps.length, maps[0].length];
    const q = new Queue(10000);
    const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
    const dis = maps.map(item=>item.map(v=>0));
    dis[0][0] = 1;
    q.push([0,0]);
    
    if (n > 1 && m > 1)
        if ((maps[1][0] === 0 && maps[0][1] === 0) || (maps[n - 2 < 0 ? 0 : n - 2][m - 1] === 0 && maps[n - 1][m - 2 < 0 ? 0 : m - 2] === 0)) return -1;
    
    while (q.length()) {
        const [x, y] = q.pop();
        for (let dir = 0; dir < 4; dir++) {
            const [nx, ny] = [x + dx[dir], y + dy[dir]];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (maps[nx][ny] === 0 || dis[nx][ny]) continue;
            q.push([nx, ny]);
            dis[nx][ny] = dis[x][y] + 1;
        }
    }
        
    return dis[n - 1][m - 1] || -1;
}