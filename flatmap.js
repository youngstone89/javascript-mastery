const arr1 = [1, 2, 1];
const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result)


const arr2 = ["it's Sunny in", "", "California"];
console.log(arr2.flatMap((x) => x.split(" ")))


const arrayLike = {
    length: 4,
    0: 1,
    1: 2,
    2: 3,
    3: 4, // length가 3이므로 flatMap()에 의해 무시됩니다.
};

console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]))