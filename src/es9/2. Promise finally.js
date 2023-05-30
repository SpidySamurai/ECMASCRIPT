const promiseFunction = (condition) => {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve("Promise resolved")
        } else {
            reject("Promise rejected")
        }
    })
}

promiseFunction(true)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally completed'))

promiseFunction(false)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally completed'))