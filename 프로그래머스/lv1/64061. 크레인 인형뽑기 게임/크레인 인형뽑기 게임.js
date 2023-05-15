function solution(board, moves) {
    let ans = 0;
    const len = board.length;
    const box = [];
    const highestIdx = new Array(len).fill(len - 1);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (board[j][i]) {
                highestIdx[i + 1] = j;
                break;
            }
        }
    }

    return moves.reduce((ret, v) => {
        if (highestIdx[v] < len) {
            box.push(board[(highestIdx[v])++][v - 1]);
        }
        
        if (box.length > 1 && box[box.length - 1] === box[box.length - 2]) {
            box.pop();
            box.pop();
            return ret + 2;
        }

        return ret;
    }, 0)
}