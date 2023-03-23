
console.log(`==================arrow function with no args no return value===================`);
let arrow_func = (() => {

   console.log("Good Morning ,Today is Monday"); 
})
arrow_func();

console.log(`==================arrow function with args no return value===================`);
let arrow_func1 = ((num1,num2,num3=1)  => {
    console.log(num1*num2*num3);

})
arrow_func1(5,5,2);
arrow_func1(10,4);

console.log(`==================arrow function with args and return value===================`);
let arrow_func2 = ((num1,num2,num3,num4,num5)   =>  {
    let sum = num1 + num2 + num3 + num4 + num5;
    return sum;
})
let result= arrow_func2(100,100,200,349,756);
console.log(`Addition : ${result}`);
let result1= arrow_func2("I am"," learning " , " ES6 " , " features " , " in depth ");
console.log(`Addition : ${result1}`);