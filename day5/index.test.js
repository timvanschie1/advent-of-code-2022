const {test, expect} = require("@jest/globals");
const part1 = require('./part1');
const part2 = require('./part2');

const testData = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

test('day 5, part 1', () => expect(part1(testData)).toBe('CMZ'));
// test('day 5, part 2', () => expect(part2(testData)).toBe(null));