function solution(players, callings) {
  const swap = (a, b, arr) => {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  };

  const playerRanking = {};
  players.forEach((player, i) => {
    playerRanking[player] = i;
  });

  callings.forEach((name) => {
    const idx = playerRanking[name];
    const followedName = players[idx - 1];
    swap(idx, idx - 1, players);
    playerRanking[name] = idx - 1;
    playerRanking[followedName] = idx;
  });

  return players;
}
