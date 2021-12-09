var calculate = document.getElementById("calculate");
var clear = document.getElementById("clear");

calculate.addEventListener("click", function(){
var bill = document.getElementById("bill").value;
  var percentage = document.getElementById("percentage").value;
  var tip = document.getElementById("tip").value = bill / percentage;
  var total = document.getElementById("total").value = parseFloat(bill) + parseFloat(tip);
});

clear.addEventListener("click", function(){
  var bill = document.getElementById("bill").value = "";
  var percentage = document.getElementById("percentage").value = "";
  var tip = document.getElementById("tip").value = "";
  var total = document.getElementById("total").value = "";

})