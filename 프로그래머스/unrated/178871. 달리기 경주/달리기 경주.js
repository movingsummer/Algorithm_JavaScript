function solution(players, callings) {
    const swap = (a, b, arr) => {
        const tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
    
    const playerRanking = new Map();
    players.forEach((player, i) => {
        playerRanking.set(player, i)
    })
    
    callings.forEach(name => {
        const idx = playerRanking.get(name);
        const followedName = players[idx - 1]
        swap(idx, idx - 1, players)
        playerRanking.set(name, idx - 1)
        playerRanking.set(followedName, idx)
    })
    
    return players;
}