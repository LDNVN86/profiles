const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    sidebar.style.animation = "slideOut 0.3s forwards";
    setTimeout(() => {
      sidebar.classList.remove("open");
    }, 10);
  } else {
    sidebar.classList.add("open");
    sidebar.style.animation = "slideIn 0.3s forwards";
  }
});

function setTime() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeClock = `${hour} : ${minutes} : ${seconds}`;
  document.getElementById("clock").innerHTML=timeClock;
}
setInterval(setTime,1000);
