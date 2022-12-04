const fs = require('fs')

let data = fs.readFileSync('./day4/input.txt', 'UTF-8').split(/\n/)
.map(row => row.split(',').map(r => r.split('-').map(Number)));

let answer = 0;

data.forEach(pair => {
    if ((pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) 
    || (pair[1][0] <= pair[0][0] && pair[1][1] >= pair[0][1])) 
        answer++;
})


console.log(answer);
