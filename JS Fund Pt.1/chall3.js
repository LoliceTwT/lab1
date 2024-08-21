// Hàm tính điểm trung bình
function calculateAverage(score1, score2, score3) {
    return parseFloat(((score1 + score2 + score3) / 3).toFixed(2));
}

// Data 1
let dolphinsAvg1 = calculateAverage(96, 108, 89);
let koalasAvg1 = calculateAverage(88, 91, 110);

console.log(`Dolphins Average: ${dolphinsAvg1}`);
console.log(`Koalas Average: ${koalasAvg1}`);

if (dolphinsAvg1 > koalasAvg1) {
    console.log('Dolphins win the trophy!');
} else if (dolphinsAvg1 < koalasAvg1) {
    console.log('Koalas win the trophy!');
} else {
    console.log('It\'s a draw!');
}

// Data Bonus 1
let dolphinsAvg2 = calculateAverage(97, 112, 101);
let koalasAvg2 = calculateAverage(109, 95, 123);

console.log(`Dolphins Average: ${dolphinsAvg2}`);
console.log(`Koalas Average: ${koalasAvg2}`);

if (dolphinsAvg2 > koalasAvg2 && dolphinsAvg2 >= 100) {
    console.log('Dolphins win the trophy!');
} else if (koalasAvg2 > dolphinsAvg2 && koalasAvg2 >= 100) {
    console.log('Koalas win the trophy!');
} else if (dolphinsAvg2 === koalasAvg2 && dolphinsAvg2 >= 100 && koalasAvg2 >= 100) {
    console.log('It\'s a draw!');
} else {
    console.log('No team wins the trophy!');
}

// Data Bonus 2
let dolphinsAvg3 = calculateAverage(97, 112, 101);
let koalasAvg3 = calculateAverage(109, 95, 106);

console.log(`Dolphins Average: ${dolphinsAvg3}`);
console.log(`Koalas Average: ${koalasAvg3}`);

if (dolphinsAvg3 > koalasAvg3 && dolphinsAvg3 >= 100) {
    console.log('Dolphins win the trophy!');
} else if (koalasAvg3 > dolphinsAvg3 && koalasAvg3 >= 100) {
    console.log('Koalas win the trophy!');
} else if (dolphinsAvg3 === koalasAvg3 && dolphinsAvg3 >= 100 && koalasAvg3 >= 100) {
    console.log('It\'s a draw!');
} else {
    console.log('No team wins the trophy!');
}
