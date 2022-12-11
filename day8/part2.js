function part2(data) {
    let highestScore = 0;

    for (let rowI = 1; rowI < data.length - 1; rowI++) {
        const row = data[rowI];

        for (let colI = 1; colI < row.length - 1; colI++) {
            const tree = row[colI];
            const treeNumber = Number(tree);
            const beforeNumbers = [...row.slice(0, colI)].map(Number);
            const afterNumbers = [...row.slice(colI + 1)].map(Number);
            const aboveNumbers = [];
            const belowNumbers = [];

            data.forEach((row, i) => {
                if (i < rowI) aboveNumbers.push(Number(row[colI]));
                if (i > rowI) belowNumbers.push(Number(row[colI]));
            })

            beforeNumbers.reverse();
            aboveNumbers.reverse();

            let treesVisibleBefore;
            beforeNumbers.forEach((number, i) => {
                if (treesVisibleBefore) return;
                if ((number >= treeNumber) || (i === beforeNumbers.length - 1)) {
                    treesVisibleBefore = i + 1;
                }
            });

            let treesVisibleAfter;
            afterNumbers.forEach((number, i) => {
                if (treesVisibleAfter) return;
                if ((number >= treeNumber) || (i === afterNumbers.length - 1)) {
                    treesVisibleAfter = i + 1;
                }
            });

            let treesVisibleAbove;
            aboveNumbers.forEach((number, i) => {
                if (treesVisibleAbove) return;
                if ((number >= treeNumber) || (i === aboveNumbers.length - 1)) {
                    treesVisibleAbove = i + 1;
                }
            });

            let treesVisibleBelow;
            belowNumbers.forEach((number, i) => {
                if (treesVisibleBelow) return;
                if ((number >= treeNumber) || (i === belowNumbers.length - 1)) {
                    treesVisibleBelow = i + 1;
                }
            });

            const scenicScore = treesVisibleBefore * treesVisibleAfter * treesVisibleAbove * treesVisibleBelow;
            highestScore = Math.max(highestScore, scenicScore);
        }
    }

    return highestScore;
}

module.exports = part2;