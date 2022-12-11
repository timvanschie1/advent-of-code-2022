function part2(data) {
    const posObj = {
        x: 0,
        y: 0,
    };

    const posKnots = {
        0: {...posObj}, // 'H'
        1: {...posObj},
        2: {...posObj},
        3: {...posObj},
        4: {...posObj},
        5: {...posObj},
        6: {...posObj},
        7: {...posObj},
        8: {...posObj},
        9: {...posObj},
    };

    const visitedPositionStrings = ['0,0']; // 'x,y'

    function handleFollowingKnotPosition(leadingKnot, followingKnot) {
        let direction;
        if (leadingKnot.x - followingKnot.x > 1) {
            direction = 'R';
        } else if (leadingKnot.y - followingKnot.y < -1) {
            direction = 'D';
        } else if (leadingKnot.x - followingKnot.x < -1) {
            direction = 'L';
        } else if (leadingKnot.y - followingKnot.y > 1) {
            direction = 'U';
        }

        switch (direction) {
            case 'R':
                followingKnot.x++;
                if (leadingKnot.y - followingKnot.y >= 1) followingKnot.y++; // make it diagonal up
                else if (leadingKnot.y - followingKnot.y <= -1) followingKnot.y--; // make it diagonal down
                break;
            case 'D':
                followingKnot.y--;
                if (leadingKnot.x - followingKnot.x >= 1) followingKnot.x++; // make it diagonal to the right
                else if (leadingKnot.x - followingKnot.x <= -1) followingKnot.x--; // make it diagonal to the left
                break;
            case 'L':
                followingKnot.x--;
                if (leadingKnot.y - followingKnot.y >= 1) followingKnot.y++; // make it diagonal up
                else if (leadingKnot.y - followingKnot.y <= -1) followingKnot.y--; // make it diagonal down
                break
            case 'U':
                followingKnot.y++;
                if (leadingKnot.x - followingKnot.x >= 1) followingKnot.x++; // make it diagonal to the right
                else if (leadingKnot.x - followingKnot.x <= -1) followingKnot.x--; // make it diagonal to the left
        }
    }

    function handleInstruction(motionString) {
        const [direction, stepsString] = motionString.split(' ');
        const steps = Number(stepsString);

        for (let step = 1; step <= steps; step++) {
            switch (direction) {
                case 'R':
                    posKnots[0].x++;
                    break;
                case 'D':
                    posKnots[0].y--;
                    break;
                case 'L':
                    posKnots[0].x--;
                    break;
                case 'U':
                    posKnots[0].y++;
            }

            for (let i = 0; i < 9; i++) {
                handleFollowingKnotPosition(posKnots[i], posKnots[i + 1]);
            }

            visitedPositionStrings.push(`${posKnots[9].x},${posKnots[9].y}`);
        }
    }

    data.forEach(handleInstruction);

    console.log(posKnots);
    return new Set([...visitedPositionStrings]).size;
}

module.exports = part2;