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

console.log(`************************Add all the emp object inside array****************`);
const array_employees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(array_employees);

console.log(`*************************Employees working in TCS***********************`);
for (const employee of array_employees) {
    if(employee.emp_company=="TCS"){
        console.log(`Employees Name : ${employee.emp_name}, Company Name : ${employee.emp_company}`);
    }
};

console.log(`*************************Finance department***********************`);
for (const employee of array_employees) {
    
    if(employee.emp_dept=="Finance"){
        console.log(`Employees Name : ${employee.emp_name}, Company Name : ${employee.emp_dept}`);
    }
};

console.log(`*************************Employees Name start with "R"***********************`);
     for (const employee of array_employees) {
        
    if(employee.emp_name.startsWith("R")){
       console.log(`Employees Name : ${employee.emp_name} `);
    }
  };

console.log(`*************************Employees salary greater than 75000***********************`);

    for (const employee of array_employees) {
        if (employee.emp_salary > 75000) {
            console.log(`Employees Name : ${employee.emp_name}, company Name : ${employee.emp_company}, salary : ${employee.emp_salary}`);
        }
    }

    console.log(`*************************Employees salary greater than 50000 && department "IT"***********************`);
    for (const employee of array_employees) {
        if (employee.emp_salary >= 50000 && employee.emp_dept == "IT") {
            console.log(`Employees ID : ${employee.emp_id}, Employee Name : ${employee.emp_name}, department : ${employee.emp_dept}, salary : ${employee.emp_salary}, company Name : ${employee.emp_company}`);
        }
    }
console.log(`*********************************Employees from company "infy"**********************`);
for (const employee of array_employees) {
    if (employee.emp_company == "Infy") {
        console.log(`Employees ID : ${employee.emp_id}, Employee Name : ${employee.emp_name}, department : ${employee.emp_dept}, salary : ${employee.emp_salary}, company Name : ${employee.emp_company}`);
        
    }
}


