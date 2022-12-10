const fs = require('fs')

let data = fs.readFileSync('./day9/input.txt', 'UTF-8').split(/\n/).map(c => c.split(' '))
let headPos = [0, 0];
let tailPos = [0, 0];

const translateMove = {'U': [1, 0], 'D': [-1, 0], 'R': [0, 1], 'L': [0, -1]};

const visited = new Map();
visited.set(tailPos.toString(), true);

const shouldMoveTail = (hp, tp) => (Math.abs(hp[0] - tp[0]) > 1 || Math.abs(hp[1] - tp[1]) > 1);

data.forEach(command => {
    const dir = command[0];
    const length = parseInt(command[1]);
    for (let i = 0; i < length; i++) {
        const oldHeadPos = [...headPos];
        headPos = [...headPos].map((v, i)=> v+translateMove[dir][i]);
        if (shouldMoveTail(headPos, tailPos)) {
            tailPos = [...oldHeadPos]
            visited.set(tailPos.toString(), true);
        }
    }
})

const answer = visited.size;

console.log(answer);
