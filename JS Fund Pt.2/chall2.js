// Tạo hàm tính
const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
};

// Tạo chuỗi bill
const bills = [125, 555, 44];

// Tạo chuỗi tip
const tips = bills.map(bill => calcTip(bill));

// Chuỗi tính tổng
const total = bills.map((bill, index) => bill + tips[index]);

// Kết quả
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);
