const button = document.querySelector("#button");
button.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  button.textContent = isDark ? "Light Mode" : "Dark Mode";
});
