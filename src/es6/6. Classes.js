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
SpidyUser.printUser();


/* Defines a class called User with a constructor and several methods.

In the constructor, the class takes two parameters, name and age, and assigns them to the respective properties of the class instance using this.name = name and this.age = age.

The class also has the following methods:

getName() returns the name of the user.
getAge() returns the age of the user.
setName(name) sets the name of the user.
setAge(age) sets the age of the user.
printUser() logs a message to the console that includes the name and age of the user.

An instance of the User class is created using the new keyword and assigned to the variable SpidyUser with the name "Spidy" and age 25. Finally, the printUser() method is called on the SpidyUser instance, which logs the user's name and age to the console.

Overall, this code demonstrates the concept of classes and objects in JavaScript. The User class serves as a blueprint for creating user objects with specific properties and methods to interact with those properties. The SpidyUser instance showcases the usage of the class and its methods. */