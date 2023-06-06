
console.log(`Given ArrayNumbers = 20, 11, 40, 25,23, 11, 9, 31,60, 2, 19 `);
console.log(`---------------------------------------------------------------`);
console.log(`1] Add 10 for each Element`);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19]
const array_add = arrayNumbers.map((element, index) => {
    return element + 10;
});
console.log(array_add);
console.log(`---------------------------------------------------------------`);

console.log(`2] Square the each Element`);
const arrayNumbers1 = arrayNumbers.map((element) => {
    return element * element;
});
console.log(arrayNumbers1);

console.log(`----------------------------------------------------------------`);

console.log(`3] Add the index value into it's corresponding each array element`);
const arrayNumbers2 = arrayNumbers.map((element, index) => {
    return element + index;
});
console.log(arrayNumbers2);
