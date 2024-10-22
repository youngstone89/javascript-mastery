const array1 = ['a', 'b', 'c']; // Array
const iterator = array1.keys() // iterator

for (const key of iterator) {
    console.log(key)
}


Array.from(array1.keys()).forEach((v, i, a) => {
    console.log(v, i)
})