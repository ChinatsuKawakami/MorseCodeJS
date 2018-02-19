/**
 * 
 */

function loadOut(){
	
	let inputId=document.getElementById("in").value;
	
	let upp = inputId.toUpperCase();
	
     let output= document.getElementById('output');
    output.innerHTML=decode(upp);
}

function clear(){
	let inputId=document.getElementById("in");
    let output= document.getElementById('output');
    
    inputId.value="";
    output.value="";
}


function decode(item){
  
  let code;
  
  switch(item){
  case "A":
    code= ".-";
    break;
  case "B":
    code="-...";
    break;
  case "C":
    code="-.-.";
    break;
  case "D":
    code= "-..";
    break;
  case "E":
    code=".";
    break;
  case "F":
    code= "..-.";
    break;
  case "G":
    code="--.";
    break;
  case "H":
    code="....";
    break;
  case "I":
    code="..";
    break;
  case "J":
    code=".---";
    break;
  case "K":
    code="-.-";
    break;
  case "L":
    code=".-..";
    break;
   case "M":
    code="--";
    break;
   case "N":
    code="-.";
    break;
   case "O":
    code="---";
    break;
   case "P":
    code=".--.";
    break;
   case "Q":
    code="--.-";
    break;
   case "R":
    code=".-.";
    break;
   case "S":
    code="...";
    break;
   case "T":
    code="-";
    break;
    case "U":
    code="..-";
    break;
    case "V":
    code="...-";
    break;
    case "W":
    code=".--";
    break;
    case "X":
    code="-..-";
    break;
    case "Y":
    code="-.--";
    break;
    case "Z":
    code="--..";
    break;
    case "0":
    code="-----";
    break;
    case "1":
    code=".----";
    break;
    case "2":
    code="..---";
    break;
    case "3":
    code="...--";
    break;
    case "4":
    code = "....-";
    break;
    case "5":
    code = ".....";
    break;
    case "6":
    code= "-....";
    break;
    case "7":
    code="--...";
    break;
    case "8":
    code="---..";
    break;
    case "9":
    code="----.";
    break;
  }
  
  return code;
  }

function makeSound(){
	let s = document.getElementById('output').value;
	$("s").morseCode({bpm:12});
}



