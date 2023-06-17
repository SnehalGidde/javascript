

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`1) Find All the Employee from Wipro`);
const arrayWiproEmployees = array_employees.filter((employee) => {
    return employee.emp_company == "TCS";
});
const arrayWiproEmployeesNames = arrayWiproEmployees.map((employee) => {
    return employee.emp_name;
});
console.log(arrayWiproEmployeesNames);

console.log(`------------------------------------------
------------`);

console.log(`2) Find all Employee from IT OR HR department `);
const arrayITOrHREmployees = array_employees.filter((employee) => {
    return employee.emp_dept == "IT" || employee.emp_dept == "HR";;
});
const arrayITOrHREmployeesNames = arrayITOrHREmployees.map((employee) => {
    return employee.emp_name;
});
console.log(arrayITOrHREmployeesNames);

console.log(`-------------------------------------------------------`);


console.log("3) Find employee whose id's greater than  50 ");
const arrayIdEmployees = array_employees.filter((employee) => {
    return employee.emp_id > 50;
});
const arrayIdEmployeesNames = arrayIdEmployees.map((employee) => {
    return employee.emp_id;
});
console.log(arrayIdEmployeesNames);
console.log(`-------------------------------------------------------`);

console.log(`4) Find Employee Name Starts with 'A', 'V' or 'M'`);

const arrayStartEmployees = array_employees.filter((employee) => {
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M");
});
const arrayStartEmployeesNames = arrayStartEmployees.map((employee) => {
    return employee.emp_name;
});
console.log(arrayStartEmployeesNames);

console.log(`--------------------------------------------------------`);

console.log(`5) Find Average Salary of Employee for all Departments`);
const DepartmentsEmployees = array_employees.filter((employee) => {
    return employee.emp_dept;

});
let sumSalary = 0;
DepartmentsEmployees.forEach((employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
const average = sumSalary / DepartmentsEmployees.length;
console.log(average);
console.log(`---------------------------------------------------------`);

console.log(`5) Find out Average Salary of IT Departments`);

const arrayITEmployees = array_employees.filter((employee) => {
    return employee.emp_dept == "IT";

});
let sumSalary1 = 0;
arrayITEmployees.forEach((employee) => {
    sumSalary1 = sumSalary1 + employee.emp_salary;
});
const average1 = sumSalary1 / arrayITEmployees.length;
console.log(average1);
console.log(`--------------------------------------------------------`);