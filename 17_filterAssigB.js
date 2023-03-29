class Employee {
    constructor(emp_id ,emp_name ,emp_dept ,emp_salary ,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"mahesh","HR",85000,"Infy");

const arrayOfEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
//console.log(array);
console.log(`-------------------All the employees from "TCS"--------------------`);
const employeeName = arrayOfEmployee.map((employee)  =>{
    if (employee.emp_company=="TCS") {
        console.log(employee.emp_name,employee.emp_company);
    }
})

console.log(`--------------------Average salary of employee from Wipro company--------------`);
const arrayOfWipro= arrayOfEmployee.filter((employee)  =>{
    return employee.emp_company == "Wipro";
})
console.log(arrayOfWipro);

const totalSalary= arrayOfWipro.reduce((runningTotal,element) =>{
    return runningTotal+element.emp_salary;
},0);
console.log(`Total Salary==> ${totalSalary}`);
console.log(`Average==> ${totalSalary/2}`);


console.log(`--------------------Average salary of employee from "Wipro" & "Infy" company--------------`);
const employeeCompany= arrayOfEmployee.filter((employee) =>{
    return employee.emp_company=="Wipro" || employee.emp_company=="Infy";
})
console.log(employeeCompany);

const total= employeeCompany.reduce((runningTotal,element)  =>{
    return runningTotal+element.emp_salary
},0);
console.log(`Total Salary ==>  ${total}`);
console.log(`Average ==> ${total/employeeCompany.length}`);


