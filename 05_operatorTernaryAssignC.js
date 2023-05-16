console.log(`/-----------------------Male Marriage Eligibility--------------------------/`);


function maleMarriageEligibility(gender, age, boyName) {
    var result = gender == "male" && age >= 21 ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
    return result;
}
var res = maleMarriageEligibility("male", 25, "Billgates")
console.log(res);

var res = maleMarriageEligibility("male", 17, "Stew job")
console.log(res);
console.log("\n");
console.log(`/-----------------------Female Marriage Eligibility--------------------------/`);


function maleMarriageEligibility(gender, age, girlName) {
    var result = gender == "female" && age >= 18 ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are not eligible for marriage`;
    return result;
}
var res = maleMarriageEligibility("female", 16, "Jenifer")
console.log(res);

var res = maleMarriageEligibility("female", 27, "Malimda Gates")
console.log(res);