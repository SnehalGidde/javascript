
console.log(`---------------------------------------------------------1] Creating an object bankSbi -------------------------------------------------------------------------------`);


bankSbi = {
    bankName: "State Bank of India",
    branch: "Pune",
    ifsc: "SBI00698134",
    accountNo: "23828745078",
    interestRate: "8.50%",

}
console.table(bankSbi);


console.log(`------------------------------------------------------------2] Creating an object bankLocation --------------------------------------------------------------------------`);

bankLocation = {
    street: "Wakad Road",
    pin: '411057',
    city: 'Pune',
}
console.table(bankLocation);


console.log(`-----------------------------------------------------------3] Clone object bankSbi and  bankLocation -----------------------------------------------------------------------`);

Object.assign(bankSbi, bankLocation)

console.table(bankSbi);

console.log(`----------------------------------------------------------4] Creating an object Rate of interest ------------------------------------------------------------------------------`);

rateOfInterest = {
    homeLoanInterest: '7.40%',
    persanlLoanInterest: '10.2%',
    dueInterest: '8.5%',
}
console.table(rateOfInterest);


console.log(`---------------------------------------------------------5] Merge the Step 1, Step 2, and Step 4, objects in sbiDetails ---------------------------------------------------------`);

const mergedObject = Object.assign({}, bankSbi, bankLocation, rateOfInterest); // Copy address and marks into the new object - mergedObject

console.table(bankSbi);
mmmm
console.table(mergedObject);

console.log(`--------------------------------------------------------6] Traverse Step 5  -------------------------------------------------------------------------------------------------------`);

for (const key in mergedObject) {
    if (Object.hasOwnProperty.call(bankSbi, key)) {
        const value = bankSbi[key];
        console.log(`${key} : ${value}`);
    }
}











