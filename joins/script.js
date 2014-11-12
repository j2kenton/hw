

var array = [];

function pushToArray() {
  var newString = document.getElementById("itemToAddInput").value;

  array.push(newString);
}

function printArray() {
	var delim = document.getElementById("delimiterInput").value;
	
 //  alert(array.join(delim));

    document.getElementById("arrayString").innerHTML = array.join(delim);
}

