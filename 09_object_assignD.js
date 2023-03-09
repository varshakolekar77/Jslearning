let professor = {
    Name : "Rajendra Pawar",
    Id : 45689,
    qualification : "Msc",
    age : 30,
    department : "physics",
    
    degrees : {
        degree1 : "engineering",
        degree2 : "CSS",
        degree3 : "PHD",
        degree4 : "Adv Computing",
    },
    certificates :["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],
    teacherDegree : function(){
       return ` 1. Teacher degrees are total degrees are : degree1 : ${this.degrees.degree1}, degree2 : ${this.degrees.degree2}, degree3 : ${this.degrees.degree3}`
    

    }
};
    console.log(`---------------step 1-------------------`);
    let result=professor.teacherDegree();
    console.log(result);
  
    //Add new property
    console.log(`---------------step 2-------------------`);
    console.log(`2. add new property total experience 14 years :`);
    professor.totalExperience = "14 Years";
    console.log(professor);

    //update the property
    console.log(`---------------step 3-------------------`);
    console.log(`3. update the property with name and Id :`);
    professor.Name = "shukla";
    console.log(professor);
    professor.Id = 34890;
    console.log(professor);

    //add new certificates-->"oracle certificated" at the end of array-->certificates
    //console.table(professor.certificates);
    console.log(`---------------step 4-------------------`);
    console.log(professor.certificates);
    console.log(`4. add new certificates-->"oracle certificated" at the end of array-->certificates`);
    professor.certificates.push("oracle certificated");
    console.log(professor.certificates);
   
    //console.table(professor.certificates);

//log log the last element of the array certificates
console.log(`---------------step 5-------------------`);
console.log(`5. last element of the array certificates:`);
console.log(professor.certificates[professor.certificates.length-1]);



   
    
