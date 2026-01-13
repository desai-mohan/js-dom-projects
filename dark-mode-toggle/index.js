const button = document.getElementById("button");

button.addEventListener("click", function () {
  isActive = document.body.classList.toggle("dark");
  button.textContent = isActive ? "Light Mode" : "Dark Mode";
});
