const fs = require('fs');
const puzzleInput = fs.readFileSync('input.txt').toString().split("\n");

const part1 = require('./part1');

console.log('day 1, part 1 answer:', part1(puzzleInput));