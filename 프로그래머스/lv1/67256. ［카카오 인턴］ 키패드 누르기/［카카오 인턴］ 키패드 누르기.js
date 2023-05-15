function solution(numbers, hand) {
    let [lHand, rHand] = [10, 12];
    const [leftSide, rightSide] = [[1, 4, 7], [3, 6, 9]];
    return numbers.reduce((ret, v) => {
        if (!v) v = 11;
        if (leftSide.includes(v)) {
            lHand = v;
            return ret + 'L'
        }
        else if (rightSide.includes(v)) {
            rHand = v;
            return ret + 'R';
        }
        else {
            let leftDis = Math.abs(lHand - v);
            let rightDis = Math.abs(rHand - v);
            leftDis = ~~(leftDis / 3) + (leftDis % 3)
            rightDis = ~~(rightDis / 3) + (rightDis % 3);
            
            if (leftDis > rightDis) {
                rHand = v;
                return ret + 'R';
            }
            else if (leftDis < rightDis) {
                lHand = v;
                return ret + 'L';
            }
            else {
                if (hand === 'left') {
                    lHand = v;
                    return ret + 'L';
                }
                else {
                    rHand = v;
                    return ret + 'R';
                }
            }
        }
    }, '')
}