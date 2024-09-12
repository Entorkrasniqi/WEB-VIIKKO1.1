document.addEventListener("DOMContentLoaded", () => {
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const navLinks = document.querySelector(".nav-links");
const image = document.querySelector(".mid-container");
mobileMenuButton.onclick = function () {
  if (container.style.display === "none" || container.style.display === "") {
    navLinks.style.display = "block";
    document.body.style.backgroundImage = "url('OutsidechillBOHO.jpeg')";
    image.style.display = "none";
    otherSections.forEach((element) => (element.style.display = "none"));
    Kuva.style.display = "none";
  };
}
openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

mobileMenuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
});
