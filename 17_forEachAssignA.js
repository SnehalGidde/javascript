
console.log(`Given ArrayNumber : 1,-7, 40, 502, -77, 91, 0, 108, 89, -601`);

console.log(`================1] log Array element with it's index====================`);
const arrayNums = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNums.forEach((element, index) => {
    console.log(index);
});

console.log(`==============2] Find the Positive Numbers and log=========================`);
const arrayNums1 = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNums.forEach((element) => {
    if (element > 0) {

        console.log(element);
    }
});

console.log(`==============3] Find the Negative Numbers,add into new array  and log ==========`);

const arrayNums2 = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
const arrayNegativeNums = [];
arrayNums.forEach((element) => {
    if (element < 0) {

        console.log(`${element}`);
    }
});

console.log(`==============4] Find the Even Numbers and log===================================`);

const arrayNums3 = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNums.forEach((element) => {
    if (element % 2 == 0) {

        console.log(`${element}`);
    }
});

console.log(`==================5] Find the Sum of all element=================================`);

const arrayNums4 = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
let sumArray = 0;
arrayNums.forEach((element) => {

    sumArray = sumArray + element;

});

console.log(` Sun of all Numbers : ${sumArray}`);

console.log(`=====================6] Only even indexed Array value===========================`);
const arrayNums5 = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNums.forEach((element, index) => {
    if (index % 2 == 0) {
        console.log(`${index} = ${element}`);
    }

});