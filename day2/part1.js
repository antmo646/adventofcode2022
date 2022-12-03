const fs = require('fs')

let data = fs.readFileSync('./day2/input.txt', 'UTF-8').split(/\n/).map(a => a.split(' '));

const calculatePoints = (game) => {
    a = game[0];
    b = game[1];
    const handScore = {X: 1, Y: 2, Z: 3};
    let gameScore;
    if ((a === 'A' && b === 'X') || (a === 'B' && b === 'Y') || (a === 'C' && b === 'Z')) gameScore = 3; 
    else if ((a === 'B' && b === 'X') || (a === 'C' && b === 'Y') || (a === 'A' && b === 'Z')) gameScore = 0; 
    else if ((a === 'C' && b === 'X') || (a === 'A' && b === 'Y') || (a === 'B' && b === 'Z')) gameScore = 6; 
    return handScore[b] + gameScore;
}

const answer = data.reduce((p, c) => p+calculatePoints(c), 0);

console.log(answer);