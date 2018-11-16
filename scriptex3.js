function numberAdd() {
var first = document.getElementById("number1").value;
var second = document.getElementById("number2").value;
var total = Number(first) + Number(second);

document.getElementById("output").innerHTML = total;
}
