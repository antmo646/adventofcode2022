const fs = require('fs')

let data = fs.readFileSync('./day3/input.txt', 'UTF-8').split(/\n/).map(row => {
    return [Array.from(row.slice(0, row.length/2)), Array.from(row.slice(row.length/2, row.length))];
});

const a1 = 'abcdefghijklmnopqrstuvwxyz';
const alpha = Array.from(a1 + a1.toUpperCase());

const doubleItems = [];
data.forEach(ruckSack => {
    doubleItems.push(ruckSack[0].find(item => ruckSack[1].includes(item)));
});

const answer = doubleItems.reduce((p, c) => p+alpha.indexOf(c)+1, 0);

console.log(answer);