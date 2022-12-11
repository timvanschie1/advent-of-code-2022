const {test, expect} = require("@jest/globals");
const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    '30373',
    '25512',
    '65332',
    '33549',
    '35390',
]

test('day 8, part 1', () => expect(part1(testData)).toBe(21));
test('day 8, part 2', () => expect(part2(testData)).toBe(8));