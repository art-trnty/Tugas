document.getElementById("bookButton").addEventListener("click", function () {
  var packageName = document.getElementById("packageName").value;
  var packageType = document.getElementById("packageType").value;
  var duration = document.getElementById("duration").value;
  var price = document.getElementById("price").value;
  var travelerName = document.getElementById("travelerName").value;
  var travelerEmail = document.getElementById("travelerEmail").value;
  var travelerPhone = document.getElementById("travelerPhone").value;

  if (
    packageName === "" ||
    packageType === "" ||
    duration === "" ||
    price === "" ||
    travelerName === "" ||
    travelerEmail === "" ||
    travelerPhone === ""
  ) {
    alert("Please fill in all the fields");
    return;
  }

  localStorage.setItem("packageName", packageName);
  localStorage.setItem("packageType", packageType);
  localStorage.setItem("duration", duration);
  localStorage.setItem("price", price);
  localStorage.setItem("travelerName", travelerName);
  localStorage.setItem("travelerEmail", travelerEmail);
  localStorage.setItem("travelerPhone", travelerPhone);

  window.location.href = "HalamanDetail.html";
});
