
function countCharA(str) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'A') {
            count++;
        }
    }
    return count;

}
let count1 = countCharA("I AM Learning  JavaScript, The Language Of JavaScript")
console.log(`1] Total number of characters 'a' or 'A' available in the given string = ${count1}`);

let count2 = countCharA("My Favourite Movie is LAggAn")
console.log(`2] Total number of characters 'a' or 'A' available in the given string = ${count2}`);
