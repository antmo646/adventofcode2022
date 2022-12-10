const fs = require('fs')

let data = fs.readFileSync('./day9/input.txt', 'UTF-8').split(/\n/).map(c => c.split(' '))
const rope = [];
for (let i = 0; i < 10; i++) {
    rope.push([0,0]);
}

const translateMove = {'U': [1, 0], 'D': [-1, 0], 'R': [0, 1], 'L': [0, -1]};

const visited = new Map();
visited.set([0,0].toString(), true);

const shouldMoveTail = (hp, tp) => (Math.abs(hp[0] - tp[0]) > 1 || Math.abs(hp[1] - tp[1]) > 1);

const addArr = (arr1, arr2) => {
    return [...arr1].map((v, i)=> v+arr2[i]);
}

const toMove = (prev, cur) => {
    const toMove = [...prev].map((v, i)=> {
        const val = v-cur[i];
        if (val > 1) return 1;
        else if (val < -1) return -1;
        return val;
    });
    return toMove;
}

data.forEach(command => {
    const dir = command[0];
    const length = parseInt(command[1]);
    for (let i = 0; i < length; i++) {
        rope[0] = addArr(rope[0], translateMove[dir]);
        for (let j = 1; j < 10; j++) {
            if (shouldMoveTail(rope[j], rope[j-1])) {
                const moveDir = toMove(rope[j-1], rope[j])
                rope[j] = [...addArr(rope[j], moveDir)];
                if (j === 9) visited.set(rope[j].toString(), true);
            }
        }
        
    }
})

const answer = visited.size;

console.log(answer);
