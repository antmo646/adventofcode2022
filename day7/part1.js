const fs = require('fs')

let data = fs.readFileSync('./day7/input.txt', 'UTF-8').split(/\r\n/)

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
        if (size > 100000) return;
    })
    return size;
} 

let answer = 0;
for (item of fileSystem.values()) {
    const size = calcDirSize(item);
    if (size <= 100000) answer += size;
};




console.log(answer);
