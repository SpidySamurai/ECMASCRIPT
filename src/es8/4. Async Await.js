const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async'),2000)
        : reject(new Error('Error!'));
    })
}

const anotherFnAsync = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello from another function')
}

console.log('Before method called')
anotherFnAsync();
console.log('After method called')