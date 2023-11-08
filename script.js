alert("Under Construction.....")

function myFunction() {
  var a = document.getElementById("myNavBar");
  if (a.className === "smallNavbar") {
    a.className += " on";
  } else {
    a.className = "smallNavbar";
  };
}

document.addEventListener('DOMContentLoaded', function() {
  const div1 = document.getElementById('topNavBar');
  const div2 = document.getElementById('Introduction');
  const div1height = div1.offsetHeight;
  const marginTopValue = div1height + 'px';
  div2.style.marginTop = marginTopValue;
});
