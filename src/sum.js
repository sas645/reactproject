const numbers = [1,2,3,4,5];
const doubled = numbers.map(number => number * 2);
const evens = numbers.filter(number => number % 2 === 0);
console.log(doubled);
console.log(evens);
const numbers = [1,2,3,4,5];
const doubledevens = numbers.filter(number => number % 2 === 0).map(number => number * 2);
console.log(doubledevens);
const num = [1,2,3,4,5];