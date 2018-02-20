/**
 * Author Chinatsu Kawakami
 * Created DATE: 2018-Feb-18
 * Modified date: 2018-Feb-19
 * Description: This is website to translate alphabet into Morse Code with sound.
 */

let oscillator;
let gain; 
let dot;
let result;
let upp =[];
let arrayletter = [];
let code;
let sound;

let audio = new Audio();
audio.src ="sound/Test Tone-1kHz-1.mp3";
function loadOut(){
	
	let inputId=document.getElementById('in');
	let outputId= document.getElementById('output');

	if(outputId.value != "Code will be Here")
	{
	   outputId.value= "";
	}
	

    arrayletter += inputId.value;
    
   
    let i;
	
     
     for(i=0;i<arrayletter.length;i++)
     {
       upp += arrayletter[i];
       result += decode(upp[i].toUpperCase());
     }
    outputId.value=result;

}

function reset(){
	let inputClear=document.getElementById('in');
	let outputClear= document.getElementById('output');
	let textAreaClear = document.getElementById('mes');
	
  if(inputClear.value != '' ||outputClear.value != '')
  {
	  document.getElementById('in').value='';
	  document.getElementById('output').value='';
    inputClear.value='';
    outputClear.value='';
    textAreaClear.value='';
    result.value ='';
    upp.value='';
    arrayletter.value ='';
   }

  
}//end of clear function

function morse(){
	
 let morse_str = conv(document.getElementById('in').value);
 play_sound(morse_str);
}

function conv(word_str){

	let strs = word_str.toUpperCase();
	let item;
	let rtn = '';
	let j;
	 for(j=0;j<strs.length;j++)
     {
	   /*if(typeof strs[j]==='undefined'){
		   delete strs[j];
	   }*/
       rtn += strs[j];
       item += soundCheck(rtn[j].toUpperCase())+"000";
     }
	 
	 return item;
	}

function play_sound(morse){
	var mstrs=morse.split('');
	var mesEle=document.getElementById("mes");
	mesEle.value="";
	var timer=setInterval(function(){
			audio.currentTime = 0;
			if(mstrs.length<=0){
				audio.pause();
				clearInterval(timer);
				return;
			}
			var onoff=mstrs.shift();
			if(onoff=="0"){
				audio.pause();
			}else{
				audio.play();
			}
			mesEle.value=mesEle.value+onoff;
	},100)
}
function decode(item){
  
 
  
  switch(item){
  case "A":
    code= ".-";
    sound="10111";
    break;
  case "B":
    code="-...";
    sound="111010101";
    break;
  case "C":
    code="-.-.";
    sound="11101011101";
    break;
  case "D":
    code= "-..";
    sound="1110101";
    break;
  case "E":
    code=".";
    sound="1";
    break;
  case "F":
    code= "..-.";
    sound="101011101";
    break;
  case "G":
    code="--.";
    sound="111011101";
    break;
  case "H":
    code="....";
    sound="1010101";
    break;
  case "I":
    code="..";
    sound="101";
    break;
  case "J":
    code=".---";
    sound="1011101110111";
    break;
  case "K":
    code="-.-";
    sound="111010111";
    break;
  case "L":
    code=".-..";
    sound="101110101";
    break;
   case "M":
    code="--";
    sound="1110111";
    break;
   case "N":
    code="-.";
    sound="11101";
    break;
   case "O":
    code="---";
    sound="11101110111";
    break;
   case "P":
    code=".--.";
    sound="10111011101";
    break;
   case "Q":
    code="--.-";
    sound="1110111010111";
    break;
   case "R":
    code=".-.";
    sound="1011101";
    break;
   case "S":
    code="...";
    sound="10101";
    break;
   case "T":
    code="-";
    sound="111";
    break;
    case "U":
    code="..-";
    sound="1010111";
    break;
    case "V":
    code="...-";
    sound="101010111";
    break;
    case "W":
    code=".--";
    sound="101110111";
    break;
    case "X":
    code="-..-";
    sound="11101010111";
    break;
    case "Y":
    code="-.--";
    sound="1110101110111";
    break;
    case "Z":
    code="--..";
    sound="11101110101";
    break;
    case "0":
    code="-----";
    sound="1110111011101110111";
    break;
    case "1":
    code=".----";
    sound="10111011101110111";
    break;
    case "2":
    code="..---";
    sound="101011101110111";
    break;
    case "3":
    code="...--";
    sound="1110111011101110111";
    break;
    case "4":
    code = "....-";
    sound="10101010111";
    break;
    case "5":
    code = ".....";
    sound="101010101";
    break;
    case "6":
    code= "-....";
    sound="11101010101";
    break;
    case "7":
    code="--...";
    sound="1110111010101";
    break;
    case "8":
    code="---..";
    sound="111011101110101";
    break;
    case "9":
    code="----.";
    sound="11101110111011101";
    break;
    
    case "undefined":
    code="";
    sound="";
    break;
    
    default:
    code="";
    sound="";
    
    break;
  }
  if(code.includes([code],'undefined')){
	  let re = /undefined/g;
	  code = code.replace(re, "");
  }
  return code;
  }
function soundCheck(item){
	  
	 
	  
	  switch(item){
	  case "A":
	    code= ".-";
	    sound="10111";
	    break;
	  case "B":
	    code="-...";
	    sound="111010101";
	    break;
	  case "C":
	    code="-.-.";
	    sound="11101011101";
	    break;
	  case "D":
	    code= "-..";
	    sound="1110101";
	    break;
	  case "E":
	    code=".";
	    sound="1";
	    break;
	  case "F":
	    code= "..-.";
	    sound="101011101";
	    break;
	  case "G":
	    code="--.";
	    sound="111011101";
	    break;
	  case "H":
	    code="....";
	    sound="1010101";
	    break;
	  case "I":
	    code="..";
	    sound="101";
	    break;
	  case "J":
	    code=".---";
	    sound="1011101110111";
	    break;
	  case "K":
	    code="-.-";
	    sound="111010111";
	    break;
	  case "L":
	    code=".-..";
	    sound="101110101";
	    break;
	   case "M":
	    code="--";
	    sound="1110111";
	    break;
	   case "N":
	    code="-.";
	    sound="11101";
	    break;
	   case "O":
	    code="---";
	    sound="11101110111";
	    break;
	   case "P":
	    code=".--.";
	    sound="10111011101";
	    break;
	   case "Q":
	    code="--.-";
	    sound="1110111010111";
	    break;
	   case "R":
	    code=".-.";
	    sound="1011101";
	    break;
	   case "S":
	    code="...";
	    sound="10101";
	    break;
	   case "T":
	    code="-";
	    sound="111";
	    break;
	    case "U":
	    code="..-";
	    sound="1010111";
	    break;
	    case "V":
	    code="...-";
	    sound="101010111";
	    break;
	    case "W":
	    code=".--";
	    sound="101110111";
	    break;
	    case "X":
	    code="-..-";
	    sound="11101010111";
	    break;
	    case "Y":
	    code="-.--";
	    sound="1110101110111";
	    break;
	    case "Z":
	    code="--..";
	    sound="11101110101";
	    break;
	    case "0":
	    code="-----";
	    sound="1110111011101110111";
	    break;
	    case "1":
	    code=".----";
	    sound="10111011101110111";
	    break;
	    case "2":
	    code="..---";
	    sound="101011101110111";
	    break;
	    case "3":
	    code="...--";
	    sound="1110111011101110111";
	    break;
	    case "4":
	    code = "....-";
	    sound="10101010111";
	    break;
	    case "5":
	    code = ".....";
	    sound="101010101";
	    break;
	    case "6":
	    code= "-....";
	    sound="11101010101";
	    break;
	    case "7":
	    code="--...";
	    sound="1110111010101";
	    break;
	    case "8":
	    code="---..";
	    sound="111011101110101";
	    break;
	    case "9":
	    code="----.";
	    sound="11101110111011101";
	    break;
	    
	    default:
	    code="";
	    break;
	  }

	  return sound;
	  }

var dict = {
	    "a":"10111",
	    "b":"111010101",
	    "c":"11101011101",
	    "d":"1110101",
	    "e":"1",
	    "f":"101011101",
	    "g":"111011101",
	    "h":"1010101",
	    "i":"101",
	    "j":"1011101110111",
	    "k":"111010111",
	    "l":"101110101",
	    "m":"1110111",
	    "n":"11101",
	    "o":"11101110111",
	    "p":"10111011101",
	    "q":"1110111010111",
	    "r":"1011101",
	    "s":"10101",
	    "t":"111",
	    "u":"1010111",
	    "v":"101010111",
	    "w":"101110111",
	    "x":"11101010111",
	    "y":"1110101110111",
	    "z":"11101110101",
	    "1":"10111011101110111",
	    "2":"101011101110111",
	    "3":"1010101110111",
	    "4":"10101010111",
	    "5":"101010101",
	    "6":"11101010101",
	    "7":"1110111010101",
	    "8":"111011101110101",
	    "9":"11101110111011101",
	    "0":"1110111011101110111",
	    ".":"10111010111010111",
	    ",":"1110111010101110111",
	    "?":"101011101110101",
	    "!":"1110101110101110111",
	    "-":"111010101010111",
	    "/":"1110101011101",
	    "@":"10111011101011101",
	    "(":"111010111011101",
	    ")":"1110101110111010111",
	    " ":"0"
	}



