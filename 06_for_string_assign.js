
console.log(`================== Step 1 ===================`);
var vowels=function(str){
    var count=0;
    for (let index = 0; index <= str.length; index++) {
        var char=str.charAt(index);
        if(char=="a"||char=="e"||char=="i" ||char=="o"||char=="u"||char=="A"||char=="E"||char=="I"||char=="O"||char=="U")
        count = count+1;
    }
    return count;

}
var result=vowels("Javascript is the language of internet");
console.log(`Given string is:"Javascript is the language of internet"`);
console.log(`Total count of vowels is:`,result);

var result=vowels("I am Angular Developer");
console.log(`Given string is:"I am Angular Developer"`);
console.log(`Total count of vowels is:`,result);

var result=vowels("Hard work and commitment is the key of success");
console.log(`Given string is:Hard work and commitment is the key of success"`);
console.log(`Total count of vowels is:`,result);

console.log(`================== Step 2===================`);

           