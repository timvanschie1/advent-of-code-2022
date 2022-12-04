const {test, expect} = require("@jest/globals");
const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    [1000, 2000, 3000],
    [4000],
    [5000, 6000],
    [7000, 8000, 9000],
    [10000]
]

test('day 1, part 1', () => expect(part1(testData)).toBe(24000));
test('day 1, part 2', () => expect(part2(testData)).toBe(45000));