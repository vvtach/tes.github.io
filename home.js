const menuR = document.querySelector(".menu-r");

document.querySelector("#horizontal").onclick = () => {
  menuR.classList.toggle("active");
};

let aw = document.querySelector("#horizontal");

document.addEventListener("click", function (e) {
  if (!aw.contains(e.target) && !menuR.contains(e.target)) {
    menuR.classList.remove("active");
  }
});
