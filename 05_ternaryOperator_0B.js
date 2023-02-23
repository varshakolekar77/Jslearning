console.log("==============Step 1=========================");
function maleMarriageEligibility(gender, age, boyName){

    var result=(gender="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` :`${boyName} Not eligible for marriage`;
    return result;
}
    
   var result=maleMarriageEligibility("Male", 25, "Billgates");
   console.log(result);

   var result=maleMarriageEligibility("Male", 17, "Stew Jobs");
   console.log(result);
  
   console.log("============Step 2=========================");
   function femaleMarriageEligibility(gender, age, girlName){
    var result=(gender="Female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` :`${girlName} Not eligible for marriage`;
    return result;
}
var result=femaleMarriageEligibility("female",16,"Jenifer");
   console.log(result);

   var result=femaleMarriageEligibility("female",27, "Malinda Gates");
   console.log(result);
   