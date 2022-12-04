const fs = require('fs');
const puzzleInput = fs.readFileSync('input.txt').toString().split('\n');
const puzzleInputPrepared = puzzleInput.map(string => string.split(" "));

const part1 = require('./part1');
const part2 = require('./part2');

console.log('day 2, part 1 answer:', part1(puzzleInputPrepared));
console.log('day 2, part 2 answer:', part2(puzzleInputPrepared));