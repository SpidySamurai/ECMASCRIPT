// array destructuring

let fruits = ['Apple', 'Banana', ]

let [a,b] = fruits;

console.log(a, fruits[0]);

//Object destructuring

let user = {username:'Spidy', password:'123456' };
let {username, password} = user;

console.log(username, user.username);

// spread operator

let admin = {username:'AdminSpidy', password:'654321'}
let country = 'MX'

let data = {id:0, ...admin,country}
console.log(data);

// rest operator
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0])
    return num + values[0];
}

sum(1,1,2,3);

/* Object destructuring, and the spread operator in JavaScript.

In the array destructuring example:

An array called fruits is defined with two elements: 'Apple' and 'Banana'.
The elements of the array are destructured using the syntax [a, b] = fruits, assigning the first element to variable a and the second element to variable b.
The values of a and fruits[0] (the first element of the original array) are logged to the console.

In the object destructuring example:

An object called user is defined with properties username and password.
The properties of the object are destructured using the syntax {username, password} = user, creating variables username and password with the corresponding values from the user object.
The values of username and user.username (accessing the property directly from the object) are logged to the console.

In the spread operator example:

An object called admin is defined with properties username and password.
A variable country is defined with the value 'MX'.
An object called data is created using the spread operator {...admin, country}, which combines the properties of the admin object along with the country variable into a new object.
The data object is logged to the console.
The last part of the code demonstrates a function called sum that uses the rest parameter syntax (...values) to accept multiple arguments as an array. The function:

Logs the values array to the console.
Adds the num parameter with the first element of the values array (num + values[0]).
Returns the sum of num and the first element of values.
Overall, the code showcases the capabilities of array destructuring, object destructuring, and the spread operator, which are useful features in JavaScript for handling arrays, objects, and function parameters. */