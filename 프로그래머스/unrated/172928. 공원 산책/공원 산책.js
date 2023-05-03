function solution(park, routes) {
    const OOB = (x, y) => x < 0 || x >= m || y < 0 || y >= n;
    const dx = [0, 1, -1, 0];
    const dy = [-1, 0, 0, 1];
    const directions = {'N':0, 'E': 1, 'W':2, 'S':3}
    const n = park.length;
    const m = park[0].length;
    let curY = park.findIndex(v=>v.includes("S"));
    let curX = park[curY].indexOf("S");
    
    for (let i = 0; i < routes.length; i++) {
        let flag = false;
        const [a,b] = routes[i].split(' ')
        let [dir, len] = [directions[a], +b];
        let [tmpX, tmpY] = [curX, curY];
        while (len--) {
            tmpX += dx[dir];
            tmpY += dy[dir];
            if (OOB(tmpX, tmpY) || park[tmpY][tmpX] ==='X') {
                flag = true;
                break;
            }
        }
        
        if (flag) continue;
        [curX, curY] = [tmpX, tmpY];
    }
    
    return [curY, curX]
}