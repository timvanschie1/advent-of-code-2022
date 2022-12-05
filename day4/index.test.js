const {test, expect} = require("@jest/globals");
const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    ['2-4', '6-8'],
    ['2-3', '4-5'],
    ['5-7', '7-9'],
    ['2-8', '3-7'],
    ['6-6', '4-6'],
    ['2-6', '4-8'],
];

test('day 4, part 1', () => expect(part1(testData)).toBe(2));
test('day 4, part 2', () => expect(part2(testData)).toBe(null));