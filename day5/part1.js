function part1(data) {
    const [stacksString, instructionsString] = data.split('\n\n');
    const stacksStringLines = stacksString.split('\n');
    const stackNumbers = stacksStringLines.pop().trim().split(/\s+/);
    stacksStringLines.reverse();

    const stacksObj = {}
    stackNumbers.forEach((stackNumber, i) => {
        stacksObj[stackNumber] = [];
        const correspondingStringIndex = 1 + (i * 4);

        stacksStringLines.forEach(stringLine => {
            const crate = stringLine.substring(correspondingStringIndex, correspondingStringIndex + 1);
            if (crate === ' ') return;
            stacksObj[stackNumber].push(crate);
        })
    })

    const instructionsStringLines = instructionsString.split('\n');
    instructionsStringLines.forEach(stringLine => {
        const [, amountString, , from, , to] = stringLine.split(' ');
        const amount = Number(amountString);

        for (let i = 0; i < amount; i++) {
            const crate = stacksObj[from].pop();
            stacksObj[to].push(crate);
        }
    })

    let answer = '';
    stackNumbers.forEach((stackNumber) => {
        answer = answer + stacksObj[stackNumber].pop();
    })
    return answer;
}

module.exports = part1;