// Data
const bills = [275, 40, 430];

// Tính tip và toltal
function calculate(bill) {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
//Dán kết quả
    console.log(`Bill: ${bill}, Tip: ${tip.toFixed(2)}, Total: ${total.toFixed(2)}`);
}
//Test
bills.forEach(bill => calculate(bill));
