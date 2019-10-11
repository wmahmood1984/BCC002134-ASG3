var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var arr1= b.concat(a);
var uniqueset = new Set(arr1);
var bacToArray = [...uniqueset];
document.write(bacToArray);

