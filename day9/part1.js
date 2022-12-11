function part1(data) {
    const posH = {
        x: 0,
        y: 0,
    };

    const posT = {
        x: 0,
        y: 0,
    };

    const visitedPositionStrings = ['0,0']; // 'x,y'

    function moveRight(steps) {
        for (let step = 1; step <= steps; step++) {
            posH.x++;
            if (posH.x - posT.x > 1) {
                posT.x++;
                if (posH.y - posT.y === 1) posT.y++; // make it diagonal up
                else if (posH.y - posT.y === -1) posT.y--; // make it diagonal down
                visitedPositionStrings.push(`${posT.x},${posT.y}`);
            }
        }
    }

    function moveDown(steps) {
        for (let step = 1; step <= steps; step++) {
            posH.y--;
            if (posH.y - posT.y < -1) {
                posT.y--;
                if (posH.x - posT.x === 1) posT.x++; // make it diagonal to the right
                else if (posH.x - posT.x === -1) posT.x--; // make it diagonal to the left
                visitedPositionStrings.push(`${posT.x},${posT.y}`);
            }
        }
    }

    function moveLeft(steps) {
        for (let step = 1; step <= steps; step++) {
            posH.x--;
            if (posH.x - posT.x < -1) {
                posT.x--;
                if (posH.y - posT.y === 1) posT.y++; // make it diagonal up
                else if (posH.y - posT.y === -1) posT.y--; // make it diagonal down
                visitedPositionStrings.push(`${posT.x},${posT.y}`);
            }
        }
    }

    function moveUp(steps) {
        for (let step = 1; step <= steps; step++) {
            posH.y++;
            if (posH.y - posT.y > 1) {
                posT.y++;
                if (posH.x - posT.x === 1) posT.x++; // make it diagonal to the right
                else if (posH.x - posT.x === -1) posT.x--; // make it diagonal to the left
                visitedPositionStrings.push(`${posT.x},${posT.y}`);
            }
        }
    }

    function handleInstruction(motionString) {
        const [direction, stepsString] = motionString.split(' ');
        const steps = Number(stepsString);

        switch (direction) {
            case 'R':
                moveRight(steps);
                return;
            case 'D':
                moveDown(steps)
                return;
            case 'L':
                moveLeft(steps)
                return;
            case 'U':
                moveUp(steps)
        }
    }

    data.forEach(handleInstruction);
    return new Set([...visitedPositionStrings]).size;
}

module.exports = part1;