const {test, expect} = require("@jest/globals");
const part1 = require('./part1');
const part2 = require('./part2');

const testData = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'

test('day 6, part 1', () => expect(part1(testData)).toBe(7));
test('day 6, part 2', () => expect(part2(testData)).toBe(19));