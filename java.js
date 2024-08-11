const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    sidebar.style.animation = "slideOut 0.3s forwards";
    setTimeout(() => {
      sidebar.classList.remove("open");
    }, 300); // Đảm bảo class "open" được xóa sau khi animation kết thúc
  } else {
    sidebar.classList.add("open");
    sidebar.style.animation = "slideIn 0.3s forwards";
  }
});
