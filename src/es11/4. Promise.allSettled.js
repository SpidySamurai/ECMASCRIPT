const promise = new Promise((resolve,reject) => reject('Reject'));
const anotherPromise = new Promise((resolve,reject) => resolve('Resolve'));
const OneMoreAnotherPromise = new Promise((resolve,reject) => resolve('Resolve2'));

Promise.allSettled([promise, anotherPromise, OneMoreAnotherPromise]).
    then(response => console.log(response));