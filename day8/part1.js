function part1(data) {
    const topBottomTrees = data[0].length + data[data.length - 1].length;
    const remainingLeftRightTrees = 2 * (data.length - 2);
    let treesVisible = topBottomTrees + remainingLeftRightTrees;

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

            const visibleBefore = Math.max(...beforeNumbers) < treeNumber;
            const visibleAfter = Math.max(...afterNumbers) < treeNumber;
            const visibleAbove = Math.max(...aboveNumbers) < treeNumber;
            const visibleBelow = Math.max(...belowNumbers) < treeNumber;
            if (visibleBefore || visibleAfter || visibleAbove || visibleBelow) {
                treesVisible = treesVisible + 1;
            }
        }
    }

    return treesVisible;
}

module.exports = part1;