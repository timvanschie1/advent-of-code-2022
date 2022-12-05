function part1(data) {
    let nrOfFullyOverlappingPairs = 0;

    data.forEach(([one, two]) => {
        const [oneMin, oneMax] = one.split('-').map(string => Number(string));
        const [twoMin, twoMax] = two.split('-').map(string => Number(string));
        const oneContainsTwo = twoMin >= oneMin && twoMax <= oneMax;
        const twoContainsOne = oneMin >= twoMin && oneMax <= twoMax;

        if (oneContainsTwo || twoContainsOne) {
            nrOfFullyOverlappingPairs++;
        }
    })

    return nrOfFullyOverlappingPairs;
}

module.exports = part1;