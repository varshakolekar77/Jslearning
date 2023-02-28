console.log(`*****************Step 1********************`);
function greatestNumber(num1,num2) {
    if(num1>num2){
        console.log(`Number is checked greatest number is:${num1}`);
    }
    else{
        console.log(`Number is checked greatest number is:${num2}`);
    }
}
greatestNumber(10,-10);
greatestNumber(800,899);
console.log(`*****************Step 2********************`);
function checkEvenOrOdd(num1){
    if (num1%2==0) {
        return "Even";
    }
        if (num1%2!=0) {
            return "Odd";
            
        }
        
}
    var result=checkEvenOrOdd(45);
    console.log(`given number 45 is: ${result}`); 
    console.log(`given number 70 is: ${checkEvenOrOdd(70)}`);
    console.log(`given number 67 is: ${checkEvenOrOdd(67)}`);
    console.log(`given number 98 is: ${checkEvenOrOdd(98)}`); 

    function ageForVote(ageForVote){
        if (ageForVote>=18) {
            console.log(`you are eligible for voting`);
            console.log(`age is${ageForVote}`);
        }
    }
    ageForVote(18);
    ageForVote(20);
    ageForVote(17);
    ageForVote(40);
 
    console.log(`*****************Step 3********************`);   
   function string(string){
    if(string.length>10){
        console.log(`string contains more than 10 character ${string}`);
    }
    if(string.charAt(0));
    console.log(`yes Given string ${string} starts with java`);
}
string("JavaScript-ES6");
    

    
    
