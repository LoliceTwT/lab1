const numbers = [7, 10, 13, 17, 19];
const isEven = (num) => num % 2 === 0;
const hasEvenNumber = numbers.some(isEven);
console.log(hasEvenNumber);
