var reverseStr = function(str){ // str = "Do it anyhow"
  var reverse = ""; // wohyna
  for (let index = str.length-1 ; index >= 0; index--) {
     var char = str.charAt(index);// o
     
     reverse = reverse + char; // "w"+"o" ==> "wo"
     //console.log(reverse);
  }
  console.log(reverse);
  if(str == reverse){
    console.log("Given string is pallindrome");
  }
  else{
    console.log("Given string is not pallindrome");
  }
}
 reverseStr("karan hi hai");
 reverseStr("madam"); 
 reverseStr("Nun");
 reverseStr("level")