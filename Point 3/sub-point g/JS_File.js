var color = ["violet","indigo","blue","green","yellow","orange","red"];
var userIndex = prompt("at which number you want to place your color");
var userColor = prompt("tell your color");
var userRemove = prompt("how many color you want to remove")
color.splice(userIndex-1,userRemove,userColor);
for(var index = 0; index<=color.length-1; index++){
  document.write("<p1>"+color[index]+" <\p1><br\>");
}

