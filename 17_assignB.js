
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
const array_employee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`1)log employee name whose company is TCS`);
for (const Employee of array_employee) {
    if (Employee.emp_company == "TCS") {
        console.log(` Employee Name is:  ${Employee.emp_name} and its Company: ${Employee.emp_company}`);

    }


}
console.log(`--------------------------------------------------------------------------------------------------------------`);
console.log(`2) log employee name whose department is finance`);
for (const Employee of array_employee) {

    if (Employee.emp_dept == "Finance") {
        console.log(` Employee department: ${Employee.emp_dept} and Employee Name: ${Employee.emp_name} `);

    }

}
console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log(`3) log employee name whose name starts with "R" `);
for (const Employee of array_employee) {

    if (Employee.emp_name.startsWith("R")) {
        console.log(` Employee id: ${Employee.emp_id} , Employee Name: ${Employee.emp_name}, Employee Department : ${Employee.emp_dept},  Employee Salary : ${Employee.emp_salary},  Employee Company : ${Employee.emp_company} `);

    }

}
console.log(`----------------------------------------------------------------------------------------------------------------`);
console.log(`4) log employee name, company & Salary whose salary is greater than 75000   `);
for (const Employee of array_employee) {

    if (Employee.emp_salary > 75000) {
        console.log(` Employee name: ${Employee.emp_name} , Employee company: ${Employee.emp_company}, Employee Salary : ${Employee.emp_salary},  Employee Salary : ${Employee.emp_salary},  Employee Company : ${Employee.emp_company} `);

    }

}
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`5) log employee name whose salary is greater than 50000 & department IT   `);
for (const Employee of array_employee) {

    if (Employee.emp_salary >= 75000) {
        console.log(` Employee name: ${Employee.emp_name}`)
    }

}
console.log(`-------------------------------------------------------------------------------------------------------------------`);
console.log(`6) log employee Details whose company "Infy"  `);
for (const Employee of array_employee) {

    if (Employee.emp_company == "Infy") {
        console.log(` Employee id: ${Employee.emp_id} , Employee Name: ${Employee.emp_name}, Employee Department : ${Employee.emp_dept},  Employee Salary : ${Employee.emp_salary},  Employee Company : ${Employee.emp_company} `);

    }

}
