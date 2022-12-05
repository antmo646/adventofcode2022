const fs = require('fs');

let [data1, data2] = fs.readFileSync('./day5/input.txt', 'UTF-8').split(/\n\n/).map(d => d.split(/\n/));
baseLength = parseInt(data1.pop().slice(-2).slice(0));

let base = Array.from(Array(baseLength), () => []);

const sortRow = (row) => {
    let j = 0;
    for (let i = 1; i < row.length; i+=4) {
        if (row[i] !== ' ') base[j].push(row[i])
        j++;
    }
}

const makeMove = (num, from, to) => {
    const crates = base[from-1].splice(0, num);
    base[to-1] = crates.concat(base[to-1]);
}

data1.forEach((row) => sortRow(row));

const moves = data2.map(move => move.match(/\d+/g).map(Number))

moves.forEach(move => makeMove(...move));

answer = base.map(c => c[0]).join('');

console.log(answer)
