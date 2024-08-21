// Data 1
let markWeight1 = 78; // kg
let markHeight1 = 1.69; // meters
let johnWeight1 = 92; // kg
let johnHeight1 = 1.95; // meters

// Tính BMI 1
let markBMI1 = markWeight1 / (markHeight1 ** 2);
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

// So sánh BMI và in ra kết quả
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
} else if (markBMI1 < johnBMI1) {
    console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI1.toFixed(2)})!`);
}

// Data 2
let markWeight2 = 95; // kg
let markHeight2 = 1.88; // meters
let johnWeight2 = 85; // kg
let johnHeight2 = 1.76; // meters

// Tính BMI 2
let markBMI2 = markWeight2 / (markHeight2 ** 2);
let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

// So sánh BMI và in ra kết quả
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`);
} else if (markBMI2 < johnBMI2) {
    console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI2.toFixed(2)})!`);
}
