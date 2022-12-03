const fs = require('fs')

let data = fs.readFileSync('./day1/input.txt', 'UTF-8').split(/\n\n/).map(el => el.split(/\n/).map(Number))
data = data.map(el => {
    return el.reduce((prev,cur) => prev+cur, 0);
})
data = data.sort((a,b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
})
const answer = data.pop() + data.pop() + data.pop();
console.log(answer);