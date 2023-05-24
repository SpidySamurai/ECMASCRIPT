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

promiseFunction(false)
    .then(response => console.log(response))
    .catch(error => console.log(error)) 

/* This code demonstrates the usage of Promises in JavaScript.

The code defines a function called promiseFunction that takes a condition parameter. It returns a new Promise that either resolves with the message "Promise resolved" if the condition is true, or rejects with the message "Promise rejected" if the condition is false.

In the first promiseFunction(true) call:

The promiseFunction is invoked with the argument true.
The Promise is resolved since the condition is true.
The then method is chained to the Promise, and the resolved value of the Promise, which is "Promise resolved", is logged to the console.

In the second promiseFunction(false) call:

The promiseFunction is invoked with the argument false.
The Promise is rejected since the condition is false.
The catch method is chained to the Promise, and the rejected value of the Promise, which is "Promise rejected", is logged to the console.
In summary, the code showcases the basic structure and usage of Promises. Promises are used to handle asynchronous operations that may succeed (resolve) or fail (reject). The then method is used to handle the resolved state, and the catch method is used to handle the rejected state of the Promise. */