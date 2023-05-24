
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`Given Array : 
[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11] `);

console.log(`1] Total numbers of elements available in given array :  ${arrayNumbers.length}`);

console.log(`---------------------------------------------------------------------------`);


console.log(` 2] first element in Array :  ${arrayNumbers[0]}`);


let arrayLength = arrayNumbers.length;
const lastElement = arrayNumbers[arrayLength - 1];
console.log(`   Last element in Array : ${lastElement}`);

console.log(`---------------------------------------------------------------------------`);

let arrayLength1 = arrayNumbers.length;
const lastElement1 = arrayNumbers[arrayLength - 3];
console.log(`3] Thired last element in Array : ${lastElement1}`);

console.log(`---------------------------------------------------------------------------`);
console.log(`4] Find All Even Numbers Using For in Loop in given array`);

console.log(`Even Numbers in Given Array is : `);
for (const index in arrayNumbers) {
    if (arrayNumbers[index] % 2 == 0) {
        console.log(arrayNumbers[index]);
    }

}


console.log(`---------------------------------------------------------------------------`);
console.log(`5] Find All Odd Numbers Using For in Loop in given array`);

console.log(`Odd Numbers in Given Array is : `);
for (const index in arrayNumbers) {
    if (arrayNumbers[index] % 2 != 0) {
        console.log(arrayNumbers[index]);
    }

}
console.log(`-------------------------------------------------------------`);
console.log(`6] Find Even Position Element in Given Array `);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 0) {
        console.log(`Even position Element: `, arrayNumbers[index]);
    }
}

console.log(`-------------------------------------------------------------`);
console.log(`7] Find Odd Position Element in Given Array `);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 != 0) {
        console.log(`Odd position Element: `, arrayNumbers[index]);
    }
}

console.log(`--------------------------------------------------------------`);

var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sum = sum + arrayNumbers[index];
}
console.log(`8] Sum of all elements in given array = `, sum);


console.log(`--------------------------------------------------------------`);
console.log(`9] Find The Number WWhich are Multiple of Five in Given Array `);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 5 == 0) {
        console.log(`The Number Which are Multiple if 5 is : `, arrayNumbers[index]);
    }
}
console.log(`--------------------------------------------------------------`);

const arrayNumbers1 =arrayNumbers.includes(115);
console.log(` 10] Is Number 115 Available in Given Array : `,arrayNumbers1);


console.log(`--------------------------------------------------------------`);

const arrayNumbers2 =arrayNumbers.includes(23);
console.log(` 11] Is Number 23 Available in Given Array : `,arrayNumbers2);

console.log(`--------------------------------------------------------------`);

const arrayNumbers3 = arrayNumbers.splice(3, 0, 55, 66);
console.log("12] Insert Number 55 & 66 Before index 3 : ", arrayNumbers);

console.log(`--------------------------------------------------------------`);

const arrayNumbers4 = arrayNumbers.splice(4,3);
console.log("13] Delete 3 Element Starting from index 4: ",arrayNumbers);