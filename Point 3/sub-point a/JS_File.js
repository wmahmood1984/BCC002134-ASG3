var color = ["violet","indigo","blue","green","yellow","orange","red"];
var userINput = prompt("please provide your favourite color");
color.unshift(userINput);
for(var index = 0; index<=color.length-1; index++){
  document.write("<p1>"+color[index]+" <\p1><br\>");
}

