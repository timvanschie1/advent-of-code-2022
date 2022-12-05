function part2(data) {
    let nrOfOverlappingPairs = 0;

    data.forEach(([one, two]) => {
        const [oneMin, oneMax] = one.split('-').map(string => Number(string));
        const [twoMin, twoMax] = two.split('-').map(string => Number(string));
        const twoMinOverlapsOne = twoMin >= oneMin && twoMin <= oneMax;
        const twoMaxOverlapsOne = twoMax >= oneMin && twoMax <= oneMax;
        const twoContainsOne = oneMin >= twoMin && oneMax <= twoMax;

        if (twoMinOverlapsOne || twoMaxOverlapsOne || twoContainsOne) {
            nrOfOverlappingPairs++;
        }
    })

    return nrOfOverlappingPairs;
}

module.exports = part2;