var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th ","st ","nd ","rd "];

for(index = 0; index <= aCities.length-1; index++){
  if(aCities[index] == "Karachi"){
    document.write(index+1+o[1]+" choice is "+aCities[index]+"<br/>");
}else if(aCities[index] == "Lahore"){
    document.write(index+1+o[2]+" choice is "+aCities[index]+"<br/>");
}else if(aCities[index] == "Islamabad"){
    document.write(index+1+o[3]+" choice is "+aCities[index]+"<br/>");
}else if(aCities[index] == "Faisalabad"){
    document.write(index+1+o[0]+" choice is "+aCities[index]+"<br/>");}};
