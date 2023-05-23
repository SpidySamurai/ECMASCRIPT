class User {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //methods
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    printUser() {
        console.log(`User: ${this.name} is ${this.age} years old.`);
    }
};

const SpidyUser = new User("Spidy", 25);
SpidyUser.printUse();