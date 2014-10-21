
function enterPressed(e){
        

	var display = document.getElementById("keyboard-display1").value;


   if (e.shiftKey == true){ 
     if (display !== display.toUpperCase()){
     display = display.toUpperCase();
  }
    else {
      display = display.toLowerCase();    
    }
   }

        if (display.trim() !== "") {	   				//or its:  .length !== 0

   if (e.altKey == true) {
     var extraHistoryContent = " " + display;
}

   else {
     var extraHistoryContent = "\n - " + display;
   }

	document.querySelector("#history").value += extraHistoryContent;

   
   if ( e.ctrlKey  == false) {
	document.getElementById("keyboard-display1").value = "";  //clear display
	 }
	// or, all in one line (dont try this at home):    document.querySelector("#history ul").appendChild(document.createElement("li"))
	}

}






function addToDisplay (id) {
  var newDigit = id.childNodes[0].nodeValue;  //instead of innerhtml which has bugs wiht  &,<,>,
  var display = document.getElementById("keyboard-display1").value;  
  document.getElementById("keyboard-display1").value = display.concat(newDigit);  
}

function addToStartOfDisplay (newDigit) {
  var display = document.getElementById("keyboard-display1").value; 
  document.getElementById("keyboard-display1").value = newDigit + display;  
  }
  
  

	

function backspace () { 
  var display = document.getElementById("keyboard-display1").value; 
  display = display.substring(0, display.length - 1);
  document.getElementById("keyboard-display1").value = display;
}		
	

function clearDisplay() { 
  document.getElementById("keyboard-display1").value = "";
}		


function shift(id) {
  var buttons = document.getElementsByTagName("button")
  
if (document.getElementById("1").innerHTML == "1") {

      for (var i = 3; i < buttons.length-2; i++)
        {
      buttons[i].innerHTML = buttons[i].innerHTML.toUpperCase();
}
      document.getElementById("s-colon").innerHTML = ":";
      document.getElementById("comma").innerHTML = "<";
      document.getElementById("period").innerHTML = ">";
      document.getElementById("slash").innerHTML = "?";
      
      document.getElementById("1").innerHTML = "!";
      document.getElementById("2").innerHTML = "@";
      document.getElementById("3").innerHTML = "#";
      document.getElementById("4").innerHTML = "$";
      document.getElementById("5").innerHTML = "%";
      document.getElementById("6").innerHTML = "^";
      document.getElementById("7").innerHTML = "&";
      document.getElementById("8").innerHTML = "*";
      document.getElementById("9").innerHTML = "(";
      document.getElementById("0").innerHTML = ")";
}  	
    	
  else {  	
      for (var i = 0; i < buttons.length-1; i++)
      {
  buttons[i].innerHTML = buttons[i].innerHTML.toLowerCase();

}
      document.getElementById("s-colon").innerHTML = ";";
      document.getElementById("comma").innerHTML = ",";
      document.getElementById("period").innerHTML = ",";
      document.getElementById("slash").innerHTML = "/";


      document.getElementById("1").innerHTML = "1";
      document.getElementById("2").innerHTML = "2";
      document.getElementById("3").innerHTML = "3";
      document.getElementById("4").innerHTML = "4";
      document.getElementById("5").innerHTML = "5";
      document.getElementById("6").innerHTML = "6";
      document.getElementById("7").innerHTML = "7";
      document.getElementById("8").innerHTML = "8";
      document.getElementById("9").innerHTML = "9";
      document.getElementById("0").innerHTML = "0";
}


}


/*

alternative function for changing screen, by Asaf, probalbly safer than mine

function clicked (text) {
  document.getElementById("keyboard-display1").value += text;
}

end function...

	*/
