document.addEventListener("DOMContentLoaded", function () {
  // Hide the overlay after 5 seconds
  setTimeout(function () {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".content").style.display = "flex";
    document.querySelector(".container").style.display = "flex";
  }, 1500);
});
