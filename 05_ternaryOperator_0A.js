console.log("============================Greatest number amongst two number=================");
function greaterNumber(num1,num2){
    
    var Result=num1>num2 ? num1:num2;
    console.log(`Number to be checked greatest Number is:${Result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("========================Check Even or Odd number==================");
function isEvenOrOddNum(num1){
    var Result=num1%2==0 ? "True":"False";
    return Result;
}
var Result=isEvenOrOddNum(29);
console.log(`given number is 29:${Result}`);

var Result=isEvenOrOddNum(44);
console.log(`given number is 44:${Result}`);

var Result=isEvenOrOddNum(0);
console.log(`given number is 0:${Result}`);

var Result=isEvenOrOddNum(101);
console.log(`given number is 101:${Result}`);

console.log("=============word length Even or Odd=======================");
function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
}
var Result=wordLength("JavaScript");
console.log(`word "javaScript"length has:${Result}`)
console.log(`Word "developer" length has :${wordLength("developer")}` );
console.log(`Word "Google" length has :${wordLength("Google")}` );








