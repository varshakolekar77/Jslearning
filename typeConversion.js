//number string used with + gives string type

var result;
result = '3' + 2;
console.log(result);                    //"32"

result = '3' + true;
console.log(result);                    //"3true"

result = '3' + undefined;
console.log(result);                   //"3undefined"

result = '3' + null;
console.log(result);                   //"3null"


//if boolean is used ,true is 1,false is 0

var result;

result = `4` - true;              //3
console.log(result);

result = 4 + true;             //5
console.log(result);

result = 4 + false;            //4 
console.log(result);

//numeric string used with -,/,* results number type
var result;

result = `4` - `2`;
console.log(result);          //2

result = `4` - 2;
console.log(result);         //2

result = `4` * 2;
console.log(result);         //8

result = `4` / 2;
console.log(result);        //2

//Arithmetic of operation of undefined with number,boolean or null gives NaN

var result;

result = 4 + undefined;
console.log(result);                 //NaN

result = 4 - undefined;
console.log(result);                //NaN

result = true + undefined;
console.log(result);               //NaN

result = null + undefined;
console.log(result);              //NaN

//String to Number
result = Number(`324`);
console.log(result);       //324

result =  Number(`324e-1`);
console.log(result);          //32.4
    
//boolean to number
result =  Number(true);       //1
console.log(result);    

result =  Number(false);
console.log(result);          //0

//if a string is an invalid number,the result will be NaN

var result;
result = Number(`hello`);
console.log(result);             //NaN

result = Number(undefined);
console.log(result);            //NaN

result = Number(NaN);
console.log(result);           //NaN

//Explicit conversion:string to number using + operator

var numberInString= "100";
console.log(typeof numberInString);

var myNumber = +numberInString;
console.log(typeof myNumber);

//Explicit conversion: number to string data type conversion using toString() method

var myNumber = 100;
console.log(typeof myNumber);         //number
var afterConversion=myNumber.toString();
console.log(typeof afterConversion);         //string