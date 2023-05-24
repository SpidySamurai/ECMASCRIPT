function* iterator(array) {
    for (let value of array) {
        yield value;
    }
}

let array = [1, 2, 3, 4, 5]
const it = iterator(array);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/* Defines a generator function called iterator that takes an array as a parameter. The function uses a for...of loop to iterate over each value in the array and yields each value one by one.

After defining the iterator function, an array [1, 2, 3, 4, 5] is created. The iterator function is invoked with the array, and the resulting iterator object is stored in the variable it.

The code then calls the next() method on the it iterator object multiple times and logs the returned values to the console.

In summary, the code demonstrates the use of a generator function to create an iterator that yields values from an array. The next() method is called to advance the iterator and obtain the yielded values. */