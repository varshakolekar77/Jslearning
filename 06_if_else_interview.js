function interview(gradScore,hscScore,sscScore,candidateName){
  if(gradScore>=70 || hscScore>=80 || sscScore>90){
    console.log(`Congrats ${candidateName} you are eligible for TCS interview`);
  }
  else{
    console.log(`${candidateName}  unfortunetly! you are not eligible for interview`);
  }
}
interview(80,86,90,"varsha");
interview(70,65,55,"Gauri");
interview(60,79,88,"vrushali");