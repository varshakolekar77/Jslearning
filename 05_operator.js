console.log(`==============Arithmetic Operators===========`);

var num1=10;
var num2=2;
var Result=num1+num2; //Addition
console.log(`addition is ${Result}`);


Result=num1-num2; //substraction
console.log(`substaction is ${Result}`);

Result=num1*num2;
console.log(`Multiplication is ${Result}`);

result = num1 ** num2;
 console.log(`Exponential is  ${result}`);

 result = num1 / 3;
 console.log(` Division is ${result} `);

 result = num1 % 3; // Modulus
 console.log(` Reminder is ${result} `);

 var num = 10; // Compound addition +=
 num+=20; // num = num + 20
 console.log(`Compound addition += ${num}`);
 
 
 console.log(`Comparison operators `);
 var num3 = "10";
 var num4 = 10;
 console.log(num3==num4); // 10==10
 console.log(num3===num4);

 var marks=70;
 var Result=marks>=60 ? "Allow for interview" : "Don't allow";
 console.log(Result);

 var age=21;
 var Result=age>=21 ? "Yes" : "No";
 console.log(Result);

 console.log("Even or Odd");
 var myNumber=7;
 var Result=myNumber%2==0 ? "eveen" : "Odd";
 console.log(Result);

 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);


