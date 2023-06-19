function solution(players, callings) {
    
    const swap = (num1, num2) => {
        const [name1, name2] = [rankingNum.get(num1), rankingNum.get(num2)];
        rankingName.set(name1, num2);
        rankingName.set(name2, num1);
        rankingNum.set(num1, name2);
        rankingNum.set(num2, name1);
    }
    
    const ans = [];
    const rankingName = new Map();
    const rankingNum = new Map();
    
    players.forEach((playerName, i) => {
        rankingName.set(playerName, i + 1);
        rankingNum.set(i + 1, playerName);
    })
    
    callings.forEach(playerName => {
        const playerNum = rankingName.get(playerName);
        swap(playerNum - 1, playerNum);
    })
    
    for (let i = 0; i < players.length; i++) {
        ans.push(rankingNum.get(i + 1));
    }
    
    return ans;
}
