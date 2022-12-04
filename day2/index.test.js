const {test, expect} = require("@jest/globals");
const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    ['A', 'Y'],
    ['B', 'X'],
    ['C', 'Z']
]

test('day 2, part 1', () => expect(part1(testData)).toBe(15));
test('day 2, part 2', () => expect(part2(testData)).toBe(12));