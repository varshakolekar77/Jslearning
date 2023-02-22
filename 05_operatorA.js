console.log("==================Step 1=================================");
function squareOfWordLength(string){

    console.log(`string:${string}`);
     var stringLength=string.length;        //string Length
     console.log(`length of word:${stringLength}`);
     Result=stringLength*stringLength;       // square of stringLength
     return Result;
     
     

}
var Result=squareOfWordLength("Angular Developer ")  //function invoke
console.log(`length of square is:${Result}`);

var Result=squareOfWordLength("JavaScript ")
console.log(`length of square is:${Result}`);

var Result=squareOfWordLength(" Google Chrome ")
console.log(`length of square is:${Result}`);

var Result=squareOfWordLength(" Developer Smart ")
console.log(`length of square is:${Result}`);


console.log("==================Step 2=================================");
function stringAssignment(){
 
     var string=`"I am Angular Developer"`;
     console.log(`${string}`);
     var stringLength=string.length;
     console.log(`String length is:${stringLength}`);    //string length
    
     var splitResult = string.split(" ");
     console.log(`total words available in that string: ${splitResult.length}`);    //use split method()

     var divide=stringLength/splitResult.length;
     console.log(`divide:${divide}`);                      //division

     var Multiplication=stringLength*splitResult.length;
     console.log(`Multiplication:${Multiplication}`);           //Multiplication



     

}
stringAssignment();




