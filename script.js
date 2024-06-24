document.addEventListener("DOMContentLoaded", function () {
  // Hide the overlay after 5 seconds
  setTimeout(function () {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".content").style.display = "flex";
    document.querySelector(".container").style.display = "flex";
  }, 1500);
});

document.getElementById("themeStyle_1").disabled = true;
document.getElementById("themeStyle_2").disabled = true;

const randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber == 1) {
  document.getElementById("themeStyle_1").disabled = false;
} else if (randomNumber == 2) {
  document.getElementById("themeStyle_2").disabled = false;
}
