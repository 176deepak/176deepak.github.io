alert("Under Construction.....")

function myFunction() {
  var a = document.getElementById("smallNav");
  if (a.className === "small-navbar") {
    a.className += " on";
  } else {
    a.className = "small-navbar";
  };

  var x = document.getElementById("myNavBar");
  if (x.className === "responsive-links") {
    x.className += " on";
  } else {
    x.className = "responsive-links";
  }
}
