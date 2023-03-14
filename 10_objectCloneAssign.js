const arrayNums = [20, 3, 4, 56, 90, 400, 49]
console.log(`-----------------perform shallow clone---------------`);
console.log(`Given array : ${arrayNums}`);
arrayNums.push(55,66);
 console.log(`shallow clone : ${arrayNums}`);

 console.log(`-----------------perform deep clone using spread opeartor---------------`);
 const clonedArray=[...arrayNums];
 console.log(`original array : ${clonedArray}`);
 arrayNums.push(10,25);
 console.log(`Deep clone : ${arrayNums}`);
 
 const arrayEven = [2, 30, 14, 8]
 console.log(`----------------------merge array operation----------------`);
 const concatArray = arrayNums.concat(arrayEven);
 console.log(concatArray);

 const employee_info = {
           emp_id : 27,
           emp_name : "john Doe",
           salary : {
            july_month : "40,0000INR",
            aug_month : "50,0000INR",
            jun_month : "65,0000INR",
           },
           address : {
            locality : {
                colony : "OM vrindavan Society",
                street : "Kanch pokli,491202",
            },
            city : "mumbai",
            state : "Maharashtra",
            country : "India",
        },
        mobiles:["+91 8600 3456 88","1800- 4567 32","+91 9096 5678 77"]
    }
            console.log(`Address==> ${employee_info.address.locality.colony}`,`,${employee_info.address.locality.street},city : ${employee_info.address.city} ,state : ${employee_info.address.state}, country : ${employee_info.address.country}`);
            console.log(`mobiles No : ${employee_info.mobiles}`);

            console.log("----------------- perform deep clone using JSON.stringfy()-------------------");
            const newEmployee = JSON.parse(JSON.stringify(employee_info));


            newEmployee.salary.july_month="80k";
            console.log(`original salary ==> ${employee_info.salary.july_month}`);
            console.log(`updated salary ==> ${newEmployee.salary.july_month="80k"}`);
            const newCountry =JSON.parse(JSON.stringify(employee_info));


            newEmployee.address.country="United Kingdom";
            console.log(`original country ==> ${employee_info.address.country}`);
            console.log(`updated country ==> ${newEmployee.address.country="United Kingdom"}`);
            