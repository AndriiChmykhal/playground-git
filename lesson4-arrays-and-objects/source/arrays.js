const cities = ['Kyiv', 'Kharkiv', 'Lviv'];
const numbers = [1, 3, 2, 5, 4, 8];
const bool = [true, false, true, false, true];
const obj = [
    {name: 'John', age: 40},
    {name: 'Bob', age: 30},
    {name: 'Jeff', age: 20},
    {name: 'Michael', age: 25}
];

cities.push('Odesa');
console.log(cities);

numbers.pop();
console.log(numbers);

const evenNumbers = numbers.filter((value) => value % 2 === 0);
console.log(evenNumbers);

const sortedBool = bool.sort((a, b) => b - a);
console.log(sortedBool);

const oddArray = [];
numbers.forEach(element => {
    if (element % 2 !== 0)
        oddArray.push(element);
});
console.log(oddArray);

const userNames = obj.map(person => person.name);
console.log(userNames);

userNames.includes('John') ? console.log('John in the array') : console.log ('John is not in the array');

console.log(cities.join(', '));
