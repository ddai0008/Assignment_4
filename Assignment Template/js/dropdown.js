
function myFunction() {
  document.getElementById("mydropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.abtbut')) {
    var dropdowns = document.getElementsByClassName("abtnav-collapse");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



