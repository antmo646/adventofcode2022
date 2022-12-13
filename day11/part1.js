const fs = require('fs')

let data = fs.readFileSync('./day11/input.txt', 'UTF-8').split(/\n\n/).map(monkey => {
    monkey = monkey.split(/\n/);
    const items = monkey[1].split(': ')[1].split(', ').map(Number);
    const operation = monkey[2].split('old ')[1].split(' ');
    const test = parseInt(monkey[3].split('by ')[1]);
    const trueTest = parseInt(monkey[4].split('monkey ')[1]);
    const falseTest = parseInt(monkey[5].split('monkey ')[1]);
    const inspections = 0;
    return {items, operation, test, trueTest, falseTest, inspections};
});


const operate = (oldVar, operator, num) => {
    if (num === 'old') num = oldVar;
    num = parseInt(num);
    if (operator === '+') return oldVar + num;
    if (operator === '*') return oldVar * num;
};

for (let round = 0; round < 20; round++) {
    data.forEach(monkey => {
        monkey.items.forEach(item => {
            item = operate(item, monkey.operation[0], monkey.operation[1]);
            item = Math.floor(item/3);
            item % monkey.test === 0 ? data[monkey.trueTest].items.push(item) 
                : data[monkey.falseTest].items.push(item);
            monkey.inspections++;
        })
        monkey.items = [];
    });
}

const inspLevels = data.map(m => m.inspections).sort((a,b) => b-a);
const answer = inspLevels[0] * inspLevels[1];
console.log(answer);
