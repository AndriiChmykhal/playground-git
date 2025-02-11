const summarizeArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

const digits = [1, 2, 3, 4, 5];
const strings = ['a', '2', 'b', '3', 'hello'];

console.log(summarizeArray(digits));
console.log(summarizeArray(strings));
