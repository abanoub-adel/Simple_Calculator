function add() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  if (!isNaN(num1) && !isNaN(num2)) {
    document.getElementById("result").value = num1 + num2;
  } else {
    alert("Please enter valid numbers");
  }
}

function subtract() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  if (!isNaN(num1) && !isNaN(num2)) {
    document.getElementById("result").value = num1 - num2;
  } else {
    alert("Please enter valid numbers");
  }
}



function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
  }



/*function clear() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
  }
  

  function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
  }
  */