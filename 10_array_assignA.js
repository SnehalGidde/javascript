

var arrayFruit = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("Given Array Element :",  arrayFruit);

const zerothIndexElement = arrayFruit[0];
console.log(` 1. first element in Array :  ${zerothIndexElement}`);

let arrayLength = arrayFruit.length;
const lastElement = arrayFruit[arrayLength - 1];
console.log(` a)  Last element in Array : ${lastElement}`);

arrayFruit.unshift("Papaya");
console.log(`2. Add "Papaya" element in the array is : ${arrayFruit}`);

const arraySpliced = arrayFruit.splice(4, 1,);

console.log(`3. Remove "Mango" element in the array is :   ${arrayFruit}`);

arrayFruit.push('Pineapple');


console.log(`4. Add ""Pineapple" element element in the array is :`, arrayFruit.toString());

const arraySpliced1 = arrayFruit.splice(4, 0, "Dragon Fruit");
console.log(`5. Insert element "Dragon Fruit" before "Water Melon" : ${arrayFruit}`);

var arrayFruit = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arrayFruit.splice(1, 1, "Kiwi")
console.log(`6. Replace element 'Orange' with 'Kiwi' in the array is : ${arrayFruit}`);

var arrayFruit = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const sliceArr = arrayFruit.slice(1, 4);
console.log(`7. Log element starting from index 1 to 4 : ${sliceArr}`);


var arrayFruit = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const sliceArr1 = arrayFruit.slice(2);
console.log(`8. Only select last 3 : ${sliceArr1}`);
console.log(`___________________________________________________________________________`);