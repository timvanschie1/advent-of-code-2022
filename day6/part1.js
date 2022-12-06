function part1(data) {
    let answer;
    for (let i = 0; i < data.length; i++) {
        const set = new Set(data.substring(i, i + 4).split(''));
        if (set.size === 4) {
            answer = i + 4;
            break;
        }
    }
    return answer;
}

module.exports = part1;