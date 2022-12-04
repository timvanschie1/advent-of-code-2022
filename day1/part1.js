function part1(data) {
    const dict = {};
    for (let i = 0; i < data.length; i++) {
        dict[i] = data[i].reduce((acc, calString) => acc + Number(calString), 0);
    }

    let highestVal = 0;
    for (const prop in dict) {
        highestVal = Math.max(highestVal, dict[prop]);
    }
    return highestVal;
}

module.exports = part1;