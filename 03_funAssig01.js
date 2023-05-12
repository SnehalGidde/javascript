console.log('/--------------------Function display--------------------/');
console.log("First function with no argument and no return type");
console.log("Second function with no argument and no return type");
console.log("\n");
console.log('/-------------------personalDetails--------------------/');

function personalDetails(firstName, lastName, collegeName) {
    console.log("My personal details is :");
    console.log("My firstName is:", firstName);
    console.log("My lastName is :", lastName);
    console.log("My collegeName is :", collegeName);

}
personalDetails("Snehal", "Gidde", "K B P College Pandharpur");

console.log("\n");

console.log('/--------------function Name-----swapValuesDude--------------/');
function swapValuesDude(A, B) {

    console.log("Before Swap--> A:", A, "B:", B);
    var temp = A;
    A = B;
    B = temp;

    console.log("After Swap--> A:", A, "B:", B);

}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000)
console.log("\n");


console.log('/--------------function Name-----addThreeValues--------------/');
function addThreeValues(a,b,c){
var result = a+b+c;
console.log("Addition is :", result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello", "Good", "Morning");


