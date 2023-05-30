// flat
let array = [1,2,3,4,5,6,[1,3,4],[3,2,1]]
console.log(array.flat(3))

// flatmap

let arrayFlatMap = [1,2,3,]
console.log(arrayFlatMap.flatMap(v => [v,v*2]));