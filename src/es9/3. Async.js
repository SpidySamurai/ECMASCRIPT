async function* fnGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const generator = fnGenerator();

generator.next().then( response => console.log(response.value));
generator.next().then( response => console.log(response.value));
generator.next().then( response => console.log(response.value));

async function arrayOfNames(names ){

    for await(let value of names) {
        console.log(value);
    }
}

const names = ['Spidy','SpidySamurai','Samurai']
arrayOfNames(names);
console.log('After arrayOfNames')


