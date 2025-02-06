const person = {
    name: 'John',
    age: 40,
    address: {
        city: 'Kyiv',
        street: 'Khreshchatyk str.',
        house: 1
    },
    hobbies: ['football', 'fishing', 'hiking'],

    printAge() {
        console.log(`I'm ${this.age} years old`);
    }
};

person.printAge();
