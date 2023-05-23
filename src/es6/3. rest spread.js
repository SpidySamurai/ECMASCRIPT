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

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0])
    return num + values[0];
}

sum(1,1,2,3);