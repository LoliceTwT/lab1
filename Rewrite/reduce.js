const numbers = [5, 10, 15, 20];

const startingValue = 0;
const totalSum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  startingValue
);

console.log(totalSum); 

