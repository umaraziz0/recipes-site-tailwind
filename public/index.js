const icon = document.querySelector("#menu-icon");
const items = document.querySelector("#menu-items");

icon.addEventListener("click", () => {
  if (items.classList.contains("hidden")) items.classList.remove("hidden");
  else items.classList.add("hidden");
});
