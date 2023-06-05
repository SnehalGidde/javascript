

const arrayNum = [11, 3, 4, 11, 4, 7, 3];
console.log(` Given array : ${arrayNum}`);
const setArrayNum = new Set();
for (const element of arrayNum) {
    setArrayNum.add(element);

}
console.log("After removing dupliates from Array ", setArrayNum.values());


const string = "How are you mate";
console.log(` Given string : ${string}`);
let st = "";
for (let index = 0; index < string.length; index++) {
    const char = string[index];
    // if ( index %2 ==0 || index %2 !=0) 
    // {
    //   var charUpper = char.toUpperCase();
    //   console.log(charUpper); 
    // }

    if (index % 2 == 0) {
        var charUpper = char.toUpperCase();
        // console.log(charUpper);
        st = st + charUpper;

    } else {
        var charUpper1 = char.toLowerCase();
        //    console.log(charUpper1);
        st = st + charUpper1;
    }





}
console.log(st);