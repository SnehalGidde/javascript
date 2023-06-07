
console.log(`Given arrayNumbers : 20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19`);

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const arrayNumbers1 = arrayNumbers.filter((array) => {
  return array>50;
});
console.log(`1) Find out all numbers which are >50`);
console.log(arrayNumbers1);

console.log(`-----------------------------------------------`);
console.log(`2) Find out all the even numbers  `);
const arrayNumbers2 = arrayNumbers.filter((array) => {
  return array%2==0;
});
console.log(arrayNumbers2);

console.log(`-----------------------------------------------`);

console.log(`3) Find out all the Odd numbers  `);
const arrayNumbers3 = arrayNumbers.filter((array) => {
  return array%2!=0;
});
console.log(arrayNumbers3);

console.log(`-----------------------------------------------`);

console.log(`4) Find out all the which are multiple of 5   `);
const arrayNumbers4 = arrayNumbers.filter((array) => {
  return array%5==0;
});
console.log(arrayNumbers4);

console.log(`-----------------------------------------------`);


console.log(`5) Find out all the which are between of 20 and 50   `);
const arrayNumbers5 = arrayNumbers.filter((array) => {
  return array>20 && array<50;
});
console.log(arrayNumbers5);
