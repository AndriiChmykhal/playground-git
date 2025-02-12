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

    getFullName() {
        return (this.firstName + ' ' + this.lastName);
    }
};

console.log(user.firstName);
console.log(user.lastName);
user.LastName = 'Stark';
console.log(user.getFullName());
