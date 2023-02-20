
// Function with no arguments and no return value
function showFullName(){
    console.log("my full name is:varsha balasaheb kolekar");

}
showFullName();    // function call or invoke 


//function with arguments and no return value
function showAge(age){
    console.log("my age is:",age);
}
showAge(24);

//function with no argument and return values

function fullName(){
    var name="varsha kolekar";
    return name;
}
var fName=fullName();
console.log(fName);

//function with arguments and return value
function sumOfNumbers(num1,num2,num3){
    var sum=num1+num2+num3;
    return sum;
}
var sumResults=sumOfNumbers(10,45,79);
console.log(sumResults);

var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1= "gauri";
var name2 = "reshma";

function swapVariables(value1,value2){
    console.log("before swapVariables:",value1,value2);
    var temp= value1;
    value1=value2;
    value2=temp;
    console.log("after swapVariables:",value1,value2);
    return "swapping variables successfully completed";
}
var Result=swapVariables(num1,num2)
var Result=swapVariables(str1,str2)
var Result=swapVariables(name1,name2)