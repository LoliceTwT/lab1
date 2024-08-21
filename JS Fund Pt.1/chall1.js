// Data 1
let markWeight1 = 78; // kg
let markHeight1 = 1.69; // meters
let johnWeight1 = 92; // kg
let johnHeight1 = 1.95; // meters

//Tính BMI Data 1
let markBMI1 = markWeight1 / (markHeight1 ** 2);
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

// Check if Mark's BMI is higher in Data 1
let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(`Data 1 - Mark's BMI: ${markBMI1.toFixed(2)}, John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Mark's BMI higher than John's? ${markHigherBMI1}`);

// Data 2
let markWeight2 = 95; // kg
let markHeight2 = 1.88; // meters
let johnWeight2 = 85; // kg
let johnHeight2 = 1.76; // meters

// Calculate BMIs for Data 2
let markBMI2 = markWeight2 / (markHeight2 ** 2);
let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

// Check if Mark's BMI is higher in Data 2
let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Data 2 - Mark's BMI: ${markBMI2.toFixed(2)}, John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Mark's BMI higher than John's ? ${markHigherBMI2}`);
