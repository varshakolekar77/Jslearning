console.log(`start`);
var num=10;
if (num>0) {
    console.log(`inside if`);
    console.log(`number is positive:${num}`);
}
console.log(`End`);

var ageForVote=20;
if (ageForVote>=18) {
    console.log(`you are eligible for voting`);
    console.log(`age is${ageForVote}`);
}
console.log(`End of next block`);

function checkEvenOrOdd(num1){
    if (num1%2==0) {
        return "Even";
    }
        if (num1%2!=0) {
            return "Odd";
            
        }
        
}
    var result=checkEvenOrOdd(45);
    console.log(`given number 45 is${result}`); 
    
    var num1=5;
    if (num1>0) {
        console.log(`given number ${num1} is positive`);
    } else {
        console.log(`given number ${num1} is negative`)
    }
    
    function maleMarriageEligibility(gender, age, boyName){
        if (gender="Male" && age>=21) {
            console.log(`you are eligible for marriage`);
        } else {
            console.log(`you are not eligible for marrriage`);
        }
    }
    maleMarriageEligibility("Male", 25, "Billgates");
    maleMarriageEligibility("Male", 20, "Anil");

