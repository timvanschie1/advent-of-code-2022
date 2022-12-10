const {pathArrayFromString, pathStringFromArray} = require("./utils");

function part1(data) {
    let currentPathString = '';
    const fileSystem = {};

    function cd(dirName) {
        switch (dirName) {
            case '/':
                currentPathString = '/';
                break;
            case '..':
                const pathArray = pathArrayFromString(currentPathString);
                pathArray.pop(); // remove last directory
                currentPathString = pathStringFromArray(pathArray);
                break
            default:
                currentPathString = currentPathString + dirName + '/';
                fileSystem[currentPathString] = fileSystem[currentPathString] || 0;
        }
    }

    data.forEach(line => {
        if (line === '$ ls') return; // not a relevant instruction, we read the data in the next lines anyway

        const [_, dir] = line.split('dir ');
        if (dir) return; // not relevant, the size of the files in the dir will come up later

        const [__, cdDir] = line.split('$ cd ');
        if (cdDir) {
            cd(cdDir);
            return;
        }

        // it's a file
        const [fileSizeString, ___] = line.split(' ');
        const fileSizeNumber = Number(fileSizeString);
        fileSystem[currentPathString] = fileSystem[currentPathString] ? fileSystem[currentPathString] + fileSizeNumber : fileSizeNumber;
    })

    // First, get the deepest level for the for loop below
    let deepestLevel = 0;
    for (const pathString in fileSystem) {
        const pathArray = pathArrayFromString(pathString);
        const depth = pathArray.length;
        deepestLevel = Math.max(deepestLevel, depth);
    }

    // Adding file sizes to the higher levels (ancestors)
    const fileSystemTotalSizes = {...fileSystem};
    for (let i = deepestLevel; i >= 0; i--) {
        for (const pathString in fileSystemTotalSizes) {
            if (pathString === '/') continue;
            const pathArray = pathArrayFromString(pathString);
            if (pathArray.length !== i) continue;

            pathArray.pop();

            let parentPathString = '';
            pathArray.forEach(dir => {
                parentPathString = parentPathString + dir;
            })

            const fileSize = fileSystemTotalSizes[pathString];
            fileSystemTotalSizes[parentPathString] = fileSystemTotalSizes[parentPathString] + fileSize;
        }
    }

    let sumOfTotals = 0;
    for (const dirPathString in fileSystemTotalSizes) {
        if (fileSystemTotalSizes[dirPathString] <= 100000) {
            sumOfTotals = sumOfTotals + fileSystemTotalSizes[dirPathString];
        }
    }


    return sumOfTotals;
}

module.exports = part1;