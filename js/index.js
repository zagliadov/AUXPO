const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const firstPath = path.resolve(__dirname, 'content', 'first.txt');
const secondPath = path.resolve(__dirname, 'content', 'second.txt');


const first = readFileSync(firstPath, 'utf8');
const second = readFileSync(secondPath, 'utf8');

console.log(first)
console.log(second);
















