const fs = require('fs')

let data = fs.readFileSync('./day1/input.txt', 'UTF-8').split(/\n\n/).map(el => el.split(/\n/).map(Number))
data = data.map(el => {
    return el.reduce((prev,cur) => prev+cur, 0);
})
const answer = Math.max(...data);
console.log(answer);