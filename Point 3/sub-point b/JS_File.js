var color = ["violet","indigo","blue","green","yellow","orange","red"];
var userINput = prompt("please name the color you want at end of the list");
color.push(userINput);
for(var index = 0; index<=color.length-1; index++){
  document.write("<p1>"+color[index]+" <\p1><br\>");
}

