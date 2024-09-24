var packageName = localStorage.getItem("packageName");
var packageType = localStorage.getItem("packageType");
var duration = localStorage.getItem("duration");
var price = localStorage.getItem("price");

var travelerName = localStorage.getItem("travelerName");
var travelerEmail = localStorage.getItem("travelerEmail");
var travelerPhone = localStorage.getItem("travelerPhone");

document.getElementById("packageName").innerHTML = packageName;
document.getElementById("packageType").innerHTML = packageType;
document.getElementById("duration").innerHTML = duration;
document.getElementById("price").innerHTML = price;

document.getElementById("travelerName").innerHTML = travelerName;
document.getElementById("travelerEmail").innerHTML = travelerEmail;
document.getElementById("travelerPhone").innerHTML = travelerPhone;

document.getElementById("printButton").addEventListener("click", function () {
  window.print();
});
