 var check_leap_year=function(leap_year){
  if(leap_year==null || leap_year==undefined || (typeof leap_year!="number" || isNaN(leap_year))){
    return `invalid data provide the valid data :${leap_year}`;
  }
  if(leap_year %4==0){
    var str=`given year is leap year :${leap_year}`;
    return str;
  }
  else{
    var str=`given year is not leap year :${leap_year}`;
    return str;
  }
  
  
   
   }
   
  var result=check_leap_year(2020);
  console.log(result);
  var result=check_leap_year(1999);
  console.log(result);
  var result=check_leap_year(1600);
  console.log(result);
  var result=check_leap_year(2022);
  console.log(result);
  var result=check_leap_year(1945);
  console.log(result);
  var result=check_leap_year(null);
  console.log(result);
  var result=check_leap_year(undefined);
  console.log(result);
  var result=check_leap_year("Twenty Twenty");
  console.log(result);
  var result=check_leap_year(NaN);
  console.log(result);
  var result=check_leap_year(1750);
  console.log(result);