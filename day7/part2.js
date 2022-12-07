const fs = require('fs')

let data = fs.readFileSync('./day7/input.txt', 'UTF-8').split(/\r\n/)


const maxSize = 40000000;

let cwd = '';

const fileSystem = new Map();



data.forEach(row => {
    const command = row.slice(0, 4).trim();
    if (command === '$ cd') {
        const dir = row.split(command)[1].trim();
        if (dir === '..') cwd = cwd.slice(0, cwd.lastIndexOf('/'));
        else if (dir === '/') cwd = dir;
        else cwd = `${cwd}/${dir}`;
    }
    else if (command === '$ ls') {
        if (!fileSystem.has(cwd)) fileSystem.set(cwd, []);
    }
    else if (command === 'dir') {
        const fullDir = `${cwd}/${row.split(command)[1].trim()}`;
        if (!fileSystem.has(fullDir)) fileSystem.set(fullDir, []);
        fileSystem.get(cwd).push(fileSystem.get(fullDir));
    } else {
        const fileSize = row.split(' ')[0];
        fileSystem.get(cwd).push(fileSize);
    }
});


const calcDirSize = (arr) => {
    let size = 0;
    arr.forEach(item => {
        if (Array.isArray(item)) size += calcDirSize(item);
        else size += parseInt(item);
    })
    return size;
} 

const totalUsed = calcDirSize(fileSystem.get('/'));
const freeUp = totalUsed - maxSize;

let answer = Number.MAX_SAFE_INTEGER;
for (item of fileSystem.values()) {
    const size = calcDirSize(item);
    if (size > freeUp && size < answer) answer = size;
};

console.log(answer)
