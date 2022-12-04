function part2(data) {
    const dict = {};
    for (let i = 0; i < data.length; i++) {
        dict[i] = data[i].reduce((acc, calString) => acc + Number(calString), 0);
    }

    const highestValues = [0, 0, 0];
    for (const prop in dict) {
        const lowestOfHighestVal = Math.min(...highestValues);
        if (dict[prop] > lowestOfHighestVal) {
            const indexOfLowest = highestValues.indexOf(lowestOfHighestVal);
            if (indexOfLowest !== -1) {
                highestValues[indexOfLowest] = dict[prop];
            }
        }
    }

    return highestValues.reduce((acc, val) => acc + val, 0);
}

module.exports = part2;