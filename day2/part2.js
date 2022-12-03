const fs = require('fs')

let data = fs.readFileSync('./day2/input.txt', 'UTF-8').split(/\n/).map(a => a.split(' '));

const calculatePoints = (game) => {
    a = game[0];
    b = game[1];
    let handScore;
    let gameScore = {X: 0, Y: 3, Z: 6};
    
    if ((a === 'A' && b === 'Y') || (a === 'B' && b === 'X') || (a === 'C' && b === 'Z')) handScore = 1; 
    else if ((a === 'A' && b === 'Z') || (a === 'B' && b === 'Y') || (a === 'C' && b === 'X')) handScore = 2; 
    else if ((a === 'A' && b === 'X') || (a === 'B' && b === 'Z') || (a === 'C' && b === 'Y')) handScore = 3; 

    return gameScore[b] + handScore;
}

const answer = data.reduce((p, c) => p+calculatePoints(c), 0);

console.log(answer);