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

const array = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`1.======================List of all employee names=======================`);
const newArray= array.map((employee) => {
       return employee.emp_name;
})
console.log(newArray);

console.log(`2.======================List of all departmant names=======================`);
const department= array.map((employee) => {
    return employee.emp_dept;
})
console.log(department);

console.log(`3.======================List of employee id's=======================`);
const id= array.map((employee) => {
    return employee.emp_id;
})
console.log(id);

console.log(`4.======================List of employee names working in TCS=======================`);
array.map((employee) =>{
    if(employee.emp_company =="TCS"){
       console.log(employee.emp_name);  
    }
    
})

