const promiseA = Promise.reject('Error');
const promiseB = new Promise((resolve) => setTimeout(resolve, 200, 'first'));
const promiseC = new Promise((resolve) => setTimeout(resolve, 300, 'second'));

const promiseList = [promiseA, promiseB, promiseC];

Promise.any(promiseList).then((value) => console.log(value));

