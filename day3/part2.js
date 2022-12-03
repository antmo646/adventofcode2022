const fs = require('fs')

let data = fs.readFileSync('./day3/input.txt', 'UTF-8').split(/\n/).map(el => Array.from(el));

const doubleItems = [];
for (let index = 0; index < data.length; index=index+3) {
    doubleItems.push(data[index].find(el => data[index+1].includes(el) && data[index+2].includes(el)))
}

const a1 = 'abcdefghijklmnopqrstuvwxyz';
const alpha = Array.from(a1 + a1.toUpperCase());

const answer = doubleItems.reduce((p, c) => p+alpha.indexOf(c)+1, 0);

console.log(answer);