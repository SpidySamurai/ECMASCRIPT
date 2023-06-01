class User {
    // methods
    greeting() {
        return "hello";
    }
};

const SpidySamurai = new User();
console.log(SpidySamurai.greeting());
const Samurai = new User();
console.log(Samurai.greeting());

// constructor
class userConstructor {
    constructor() {
        console.log("Nuevo usuario");
    }
    greeting() {
        return "hello";
    }
}

const david = new user();

// this
class userThis {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new userThis("Ana");
console.log(ana.greeting());

// setters getters
class userGETSET {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    // metodos
    #speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const Spidy = new userGETSET("david", 15);
console.log(Spidy.uAge);
console.log(Spidy.uAge = 20);