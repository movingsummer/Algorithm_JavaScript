function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let idx1 = idx2 = 0;
    
    for (const item of goal) {
        if (idx1 < cards1.length && cards1[idx1] === item) idx1++;
        else if (idx2 < cards2.length && cards2[idx2] === item) idx2++;
        else {
            answer = 'No'
            break;
        }
    }
    
    return answer;
}