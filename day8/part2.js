const fs = require('fs')

let data = fs.readFileSync('./day8/input.txt', 'UTF-8').split(/\r\n/).map(row => row.split('').map(Number))

let answer = 0;

const calcScenicScore = (y, x) => {
    const currentTreeSize = data[y][x];
    if ([y, x].includes(0) || y === data.length-1 || x === data[y].length-1) return 0;
    const up = data.slice(0, y).map(row => row[x]).reverse();
    const down = data.slice(y+1, data.length).map(row => row[x]);
    const left = data[y].slice(0, x).reverse();
    const right = data[y].slice(x+1, data[y].length);
    return [up, down, left, right].reduce((p, c) => {
        let dirScore = 0;
        c.every(tree => {
            dirScore += 1;
            if (currentTreeSize <= tree) return false;
            return true;
        });
        return p*dirScore;
    }, 1)
}

for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
        answer = Math.max(answer, calcScenicScore(y, x));     
    }
}

console.log(answer);
