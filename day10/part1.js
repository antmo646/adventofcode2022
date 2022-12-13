const fs = require('fs')

let data = fs.readFileSync('./day10/input.txt', 'UTF-8').split(/\n/)

let X = 1;
calcCycles = [20, 60, 100, 140, 180, 220];
let answer = 0;
let cycle = 1;

for (let i = 0; i < data.length; i++) {
    const inst = data[i];
    if (calcCycles.includes(cycle)) answer += cycle*X;
    if (inst === 'noop') {
        cycle++;
        continue;
    }
    cycle ++; 
    if (calcCycles.includes(cycle)) answer += cycle*X;
    cycle ++;
    X += parseInt(inst.split(' ')[1]);
}

console.log(answer);
