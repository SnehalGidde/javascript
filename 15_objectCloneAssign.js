


console.log(`1] Perform Shallow Clone`);
console.log(` Update Cloned Array with Value => 55, 66 using push.`);

console.log(` Given Array is = [20, 3, 4, 56, 90, 400, 49]`);
const array = [20, 3, 4, 56, 90, 400, 49];

const clonedArray = array;
clonedArray.push(55, 66);
console.log(` Cloned Array : ${array}`);

console.log(`====================================================================`);

console.log(`2] Perform Deep Clone`);
console.log(` Original Array = ${array}`);
const newArray = [...array, 10, 25]
console.log(` Cloned Array = ${newArray}`);

console.log(`====================================================================`);

console.log(`3] Merge or Concating Array Using Spread Operator`);
const arrayEven = [2, 30, 14, 8];
const arrayNums = [...newArray, ...arrayEven];
console.log(`  Concating Array =${arrayNums}`);
console.log(`====================================================================`);

console.log(`4] Creating  'Employee_Info' object `);
console.log(`5] Employee Details`);
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "40,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.table(employee_info.address);
console.table(`B. Mobile Nmber's => ${employee_info.mobiles}`);

console.log(`====================================================================`);

console.log(`6] Perform Deep Clone Copy Using JSON.stringfy()`);

console.log(` Original Salary`);
console.table(employee_info.salary);
employee_info.salary.july_month = "80,0000INR",

    console.log(`a) Updated Salary`);
console.table(employee_info.salary);

console.log("b) Original Country =", employee_info.address.country);
employee_info.address.country = "United Kingdom",
    console.log("c) Updated Country =", employee_info.address.country);