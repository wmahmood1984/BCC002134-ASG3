for(var index = 1; index<=15; index++){
    if(index == 1){
        document.write("Counting: "+index +", ")
    }else if(index < 15  && index >1){document.write(index+", ")
}else{document.write(index+", <br/>")}

};

for(var num = 10; num>=1; num--){
    if(num == 10){
        document.write("Reverse Counting: "+num +", ");
   }else if(num <10 && num >1){document.write(num+", ")
}else{document.write(num+", <br/>")};

};

for(var EvenNUm = 0; EvenNUm<=20; EvenNUm = EvenNUm+2){
    if(EvenNUm == 0){
        document.write("Even: "+EvenNUm +", ");
   }else if(EvenNUm <20 && EvenNUm >0){document.write(EvenNUm+", ")
}else{document.write(EvenNUm+", <br/>")};

};

for(var oddNUm = 1; oddNUm<=19; oddNUm = oddNUm+2){
    if(oddNUm == 1){
        document.write("Odd: "+oddNUm +", ");
   }else if(oddNUm <19 && oddNUm >0){document.write(oddNUm+", ")
}else{document.write(oddNUm+", <br/>")};

};

for(var Series = 2; Series<=20; Series = Series+2){
    if(Series == 2){
        document.write("Series: "+Series +"K, ");
   }else if(Series <20 && Series >0){document.write(Series+"K, ")
}else{document.write(Series+"K, <br/>")};

};

