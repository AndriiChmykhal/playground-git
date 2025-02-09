const user = {
    firstName: "John",
    lastName: "Snow",
    age: 30,
    address: {
        country: "Winterfall",
        street: "Wall",
        house: 1
    },

    getFirstName () {
        return this.firstName;
    },

    getLastName () {
        return this.lastName;
    },

    setLastName(lastName) {
        this.lastName = lastName;
    },

    getFullName() {
        fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}

console.log(user.getFirstName());
console.log(user.getLastName());
user.setLastName("Stark");
console.log(user.getFullName());