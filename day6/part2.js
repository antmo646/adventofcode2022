const fs = require('fs')

let data = fs.readFileSync('./day6/input.txt', 'UTF-8').toString();

let answer;
for (let i = 13; i < data.length; i++) {
    const chars = data.slice(i-13, i+1);
    if (chars.length === new Set(chars).size) {
        answer = i+1;
        break;
    }
    
}
console.log(answer);
