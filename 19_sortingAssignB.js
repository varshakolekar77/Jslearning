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

const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`====================== sort the arrayEmployees in ascending order of employees id's===============`);
arrayEmployees.sort((emp1,emp2)  =>{
    return emp1.emp_id > emp2.emp_id ? 1 : -1;
});
arrayEmployees.forEach((employee)  =>{
    console.log(`Employee Id : ${employee.emp_id},Employee Name : ${employee.emp_name},Employee Department : ${employee.emp_dept}`);
})
console.log(`======================sort the arrayEmployees in ascending order of employees department=================`);
arrayEmployees.sort((emp1,emp2)  =>{
    return emp1.emp_dept > emp2.emp_dept ? 1 :-1;
})
arrayEmployees.forEach((employee)  =>{
    console.log(`Employee Department : ${employee.emp_dept},Employee Id : ${employee.emp_id},Employee Company : ${employee.emp_company}`);
})

console.log(`======================sort the arrayEmployees in descending order of employees salary=================`);
arrayEmployees.sort((salary1,salary2)  =>{
    return salary1.emp_salary > salary2.emp_salary ? -1 : 1;
})
arrayEmployees.forEach((employee) => {
console.log(`Employee salary : ${employee.emp_salary} , Employee name : ${employee.emp_name} , Employee Company : ${employee.emp_company}`);
    
})
