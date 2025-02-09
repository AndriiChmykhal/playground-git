function summarizeArray(arr) {
    let sum = 0;
    forEach(arr, (number) => {
        sum += number;
    });
    return sum;
}

const digits = [1, 2, 3, 4, 5];
const strings = ['a', '2', 'b', '3', 'hello'];


console.log(summarizeArray(digits)); // 15
console.log(summarizeArray(strings));