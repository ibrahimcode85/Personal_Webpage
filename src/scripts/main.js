// Header related functions
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

document.querySelector(".menu-icon").addEventListener("click", toggleMenu);
