const fs = require('fs')
let data = fs.readFileSync('./day4/input.txt', 'UTF-8').split(/\n/)
.map(row => row.split(',').map(r => {
    const a = r.split('-').map(Number)
    return Array.from(Array(a[1]-a[0]+1), (v, k) => k + a[0]);
}));

let answer = 0;

data.forEach(pair => {
    const total = pair[0].concat(pair[1]);
    const setTotal = new Set(total);
    total.length !== setTotal.size ? answer++ : '';
})


console.log(answer);