const { readFileSync, writeFileSync } = require('fs');
const path = require('path');


const firstPath = path.resolve(__dirname, 'content', 'first.txt');
const secondPath = path.resolve(__dirname, 'content', 'second.txt');
const result = path.resolve(__dirname, 'content', 'result-sync.txt');

const first = readFileSync(firstPath, 'utf8');
const second = readFileSync(secondPath, 'utf8');

writeFileSync(result, `Here is the result : ${first}, ${second}`)