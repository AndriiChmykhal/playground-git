function summarizeArray(arr) {
    return arr.reduce((sum, number) => sum + number, 0);
}

const digits = [1, 2, 3, 4, 5];
const strings = ['a', '2', 'b', '3', 'hello'];

console.log(summarizeArray(digits));
console.log(summarizeArray(strings));
