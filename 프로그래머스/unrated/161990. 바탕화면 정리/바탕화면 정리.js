function solution(wallpaper) {
    const coorX = [];
    const coorY = [];
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === '#') {
                coorX.push(i);
                coorY.push(j);
            }
        }
    }
    
    coorX.sort((a, b) => a - b);
    coorY.sort((a, b) => a - b);
    
    return [coorX[0], coorY[0], coorX[coorX.length - 1] + 1, coorY[coorY.length - 1] + 1];
}