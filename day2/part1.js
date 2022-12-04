function part1(data) {
    const SCORE_PER_SHAPE = {
        'X': 1,
        'Y': 2,
        'Z': 3
    }

    const SCORE_PER_COMBI = {
        'AX': 3,
        'AY': 6,
        'AZ': 0,
        'BX': 0,
        'BY': 3,
        'BZ': 6,
        'CX': 6,
        'CY': 0,
        'CZ': 3,
    };

    let totalScore = 0;

    data.forEach(item => {
        const shapeScore = SCORE_PER_SHAPE[item[1]];
        const combiScore = SCORE_PER_COMBI[item[0] + item[1]];
        totalScore = totalScore + shapeScore + combiScore;
    })

    return totalScore;
}

module.exports = part1;