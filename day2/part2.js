function part2(data) {
    const SCORE_PER_ENDING = {
        'X': 0,
        'Y': 3,
        'Z': 6
    }

    const SCORE_PER_SHAPE = {
        'X': 1,
        'Y': 2,
        'Z': 3
    }

    const SHAPE_PER_COMBI = {
        'AX': 'Z',
        'AY': 'X',
        'AZ': 'Y',
        'BX': 'X',
        'BY': 'Y',
        'BZ': 'Z',
        'CX': 'Y',
        'CY': 'Z',
        'CZ': 'X',
    };

    let totalScore = 0;

    data.forEach(item => {
        const shape = SHAPE_PER_COMBI[item[0] + item[1]];
        const shapeScore = SCORE_PER_SHAPE[shape];
        const endingScore = SCORE_PER_ENDING[item[1]];
        totalScore = totalScore + shapeScore + endingScore;
    })

    return totalScore;
}

module.exports = part2;