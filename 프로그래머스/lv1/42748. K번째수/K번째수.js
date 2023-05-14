function solution(array, commands) {
    return commands.map(item => {
        const [from, to, num] = item;
        return array.slice(from - 1, to).sort((a, b) => a - b)[num - 1];
    })
}