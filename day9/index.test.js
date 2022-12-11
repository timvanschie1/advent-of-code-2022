const {test, expect} = require("@jest/globals");
const part1 = require('./part1');
const part2 = require('./part2');

const testDataPartOne = [
    'R 4',
    'U 4',
    'L 3',
    'D 1',
    'R 4',
    'D 1',
    'L 5',
    'R 2',
]

const testDataPartTwo = [
    'R 5',
    'U 8',
    'L 8',
    'D 3',
    'R 17',
    'D 10',
    'L 25',
    'U 20',
]

test('day 9, part 1', () => expect(part1(testDataPartOne)).toBe(13));
test('day 9, part 2', () => expect(part2(testDataPartTwo)).toBe(36));