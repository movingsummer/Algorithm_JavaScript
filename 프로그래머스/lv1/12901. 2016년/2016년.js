function solution(a, b) {
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const month = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    return day[(month[a - 1] + b - 1) % 7]
}