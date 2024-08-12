const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    sidebar.style.animation = "slideOut 0.3s forwards";
    setTimeout(() => {
      sidebar.classList.remove("open");
    }, 200); 
  } else {
    sidebar.classList.add("open");
    sidebar.style.animation = "slideIn 0.3s forwards";
  }
});
