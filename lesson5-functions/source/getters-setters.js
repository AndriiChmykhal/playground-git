const user = {
    _firstName: 'John',
    _lastName: 'Snow',
    age: 30,
    address: {
        country: 'Winterfall',
        street: 'Wall',
        house: 1
    },

    get firstName() {
        return this._firstName;
    },

    get lastName() {
        return this._lastName;
    },

    set lastName(lastName) {
        this._lastName = lastName;
    },

    getFullName() {
        return (this.firstName + ' ' + this.lastName);
    }
};

console.log(user._firstName);
console.log(user._lastName);
user.lastName = 'Stark';
console.log(user.getFullName());
