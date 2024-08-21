// Tạo bill
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Tạo tip và total
const tips = [];
const totals = [];

// Hàm tính tiền tip
const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
};

// Tính tiền tip và tổng tiền
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);  
    tips.push(tip);                 
    totals.push(bills[i] + tip);   
}

// Tính trung bình
const calcAverage = (arr) => {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  
    }
    return sum / arr.length;
};

// Tính trung bình của mảng totals
const averageTotal = calcAverage(totals);

// In kết quả
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);
console.log('Avg Total:', averageTotal.toFixed(2));  
