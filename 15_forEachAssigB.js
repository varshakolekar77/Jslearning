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

const array_employee =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
array_employee.forEach(employee => {
    if(employee.emp_company=="TCS"){
        console.log(`Employee Name : `,employee.emp_name,`Company Name : `,employee.emp_company);
    }
});
console.log(`========================Step 2==================================`);
array_employee.forEach(employee => {
    if(employee.emp_salary>=50000){
        console.log(`Employee Id :`,employee.emp_id,`Name:`,employee.emp_name,`Dept:`,employee.emp_dept,`salary:`,employee.emp_salary,`Comany name:`,employee.emp_company);
    }
});

console.log(`===========================Step 3=============================`);
let sum=0;
array_employee.forEach((employee)  =>{
    sum= sum+ employee.emp_salary;
});
console.log(`Sum of all employee salary : ${sum}`);

console.log(`================================Step 4===============================`);
let total=0;
let average =0;
array_employee.forEach((employee)  =>{
    total= total+employee.emp_salary;
    //console.log(total);
    average = total /array_employee.length
})
console.log(`Average salary : ${average}`);

console.log(`==============================Step 5==================================`);
array_employee.forEach((employee)  =>{
    if ((employee.emp_dept == "IT"||"TCS") && (employee.emp_salary>=75000)) {
        console.log(`Employee Id :`,employee.emp_id,`Name:`,employee.emp_name,`Dept:`,employee.emp_dept,`salary:`,employee.emp_salary,`Comany name:`,employee.emp_company); 
    }
    
})
