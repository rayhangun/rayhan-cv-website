// Simple JavaScript to display the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  var footer = document.querySelector("footer p");
  footer.innerHTML =
    "&copy; " + currentYear + " Rayhan's Website. All rights reserved.";
});
