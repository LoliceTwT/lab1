const fruitPrices = new Map();

fruitPrices.set('apple', 100);
fruitPrices.set('banana', 150);
fruitPrices.set('cherry', 200);

console.log(fruitPrices.get('apple'));

fruitPrices.set('apple', 120);

console.log(fruitPrices.get('apple'));
console.log(fruitPrices.size);

fruitPrices.delete('banana');

console.log(fruitPrices.size);
