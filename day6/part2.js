function part1(data) {
    let answer;
    for (let i = 0; i < data.length; i++) {
        const set = new Set(data.substring(i, i + 14).split(''));
        if (set.size === 14) {
            answer = i + 14;
            break;
        }
    }
    return answer;
}

module.exports = part1;