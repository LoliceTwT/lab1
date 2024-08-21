// Tạo đối tượng
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    // Công thức tính BMI
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    // Công thức tính BMI
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

// Tính BMI
const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

// So sánh BMI
if (markBMI > johnBMI) {
    console.log(`${mark.fullName}'s BMI (${markBMI.toFixed(1)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    console.log(`${john.fullName}'s BMI (${johnBMI.toFixed(1)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(1)})!`);
} else {
    console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI (${markBMI.toFixed(1)})!`);
}
