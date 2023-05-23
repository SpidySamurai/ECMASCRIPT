function* iterator(array) {
    for (let i= 0; i < array.length; i++) {
        yield value;
    }
}


let array = [1, 2, 3, 4, 5]
const it = iterator(array);
console.log(it.next());