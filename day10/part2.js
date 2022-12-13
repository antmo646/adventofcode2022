const fs = require('fs')

let data = fs.readFileSync('./day10/input.txt', 'UTF-8').split(/\n/)

calcCycles = [41, 81, 121, 161, 201, 241];
let crtX = 0;
let crtY = 0;
let spritePos = 1;
const crt = [];
crt.push([]);
let cycle = 1;

for (let i = 0; i < data.length; i++) {
    const inst = data[i];
    if (calcCycles.includes(cycle)) {
        crtY++; 
        crtX = 0;
        crt.push([]);
    }
    if (Math.abs(spritePos - crtX) < 2) crt[crtY].push('#');
    else crt[crtY].push('.');
    if (inst === 'noop') {
        cycle++;
        crtX++;
        continue;
    }
    cycle++; 
    crtX++;
    if (calcCycles.includes(cycle)) {
        crtY++; 
        crtX = 0;
        crt.push([]);
    }
    if (Math.abs(spritePos - crtX) < 2) crt[crtY].push('#');
    else crt[crtY].push('.');
    cycle++;
    crtX++;
    spritePos += parseInt(inst.split(' ')[1]);
}

const answer = crt.map(arr => arr.join(''));
console.log(answer);
