var Cities = ["Karachi ","Lahore ","Islamabad ","Quetta ","Peshawar "]
document.write("<h1>List of cities<\h1><br/>")
for(index = 0; index <= Cities.length-1; index++){
document.write("<P1>"+Cities[index]+", <P1/>")};

document.write("<h1>Selected cities<\h1><br/>")
var newCities = Cities.slice(2,4);
for(index1 = 0; index1 <= newCities.length-1; index1++){
  document.write("<P1>"+newCities[index1]+", <P1/>")};
