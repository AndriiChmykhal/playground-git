const user = {
    firstName: 'John',
    lastName: 'Snow',
    age: 30,
    address: {
        country: 'Winterfall',
        street: 'Wall',
        house: 1
    },

    get FirstName() {
        return this.firstName;
    },

    get LastName() {
        return this.lastName;
    },

    set LastName(lastName) {
        this.lastName = lastName;
    },

    get FullName() {
        return (this.firstName + ' ' + this.lastName);
    }
};

console.log(user.FirstName);
console.log(user.LastName);
user.LastName = 'Stark';
console.log(user.FullName);
