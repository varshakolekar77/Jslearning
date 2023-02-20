console.log("**************** Step 1 **************");
function fullName(){
    console.log("my full name is:varsha balasaheb kolekar");
}
fullName();

function collegeName(){
    console.log("college name:SVPM malegaon bk");
}
collegeName();

console.log("************* Step 2 **************");

function personalDetails(firstName,lastName,collegeName){
         console.log("firstName:",firstName,"lastName:",lastName,"collegeName:",collegeName);

}
personalDetails("varsha","kolekar","svpm");

console.log("********************Step 3 ***********************");
function swapValuesDude(value1,value2){
      console.log("before the swap values:",value1,value2);
       var temp=value1;
       value1=value2;
       value2=temp;
     console.log("after swap values:",value1,value2);

}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);

console.log("****************Step 4********************");
function addThreeValues(value1,value2,value3){
        Addition=value1+value2+value3;
        return Addition ;
}
var Addition=addThreeValues(10.23,600,40);
console.log("sum of three numbers:",Addition);
addThreeValues("hello","Good","Morning");
console.log("message:",Addition);

