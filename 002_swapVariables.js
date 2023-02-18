var num1=100;
var num2=200;
var num3=300;
console.log(num1,num2,num3);
console.log("after swapping values:");

var temp=num1;
num1=num2;
num2=temp;
console.log(num1);

var num2=temp;
num2=num3;
num3=temp;
console.log(num2);

var temp=num3;
num1=num3;
num1=temp;
console.log(num3);