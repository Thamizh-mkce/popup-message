const showPopupButton = document.getElementById("show-popup");
const popup = document.getElementById("popup");
const closeButton = document.querySelector(".close-button");

showPopupButton.addEventListener("click", () => {
  popup.style.display = "block";
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
