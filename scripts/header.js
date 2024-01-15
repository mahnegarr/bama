// const menuItems = document.querySelectorAll(".menu-items ul li");
// const subMenus = document.querySelector(".submenu");
// menuItems.forEach((item) => {
//   item.addEventListener("mouseover", ()=>{
//     menuItemsHandler(subMenus)
//   });
// });

// function menuItemsHandler(elements) {

//     elements.style.display = "block";

// }

const searchBox = document.querySelector(".search-box");
const searchModal = document.querySelector(".search-modal");
const crossIcon = document.querySelector(".fa-times");
const carToggle = document.querySelector(".car-toggle");
const carToggleSub = document.querySelector(".car-toggle-submenu");
const filterWrapper = document.querySelector(".filters-wrapper-right");
const brandModal = document.querySelector(".brand-modal");
const body = document.querySelector("body");
const backdrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".brand-modal-close")
searchBox.addEventListener("click", () => {
  searchModal.style.display = "block";
});
crossIcon.addEventListener("click", () => {
  searchModal.style.display = "none";
});

carToggle.addEventListener("click", () => {
  carToggleSub.style.display =
    carToggleSub.style.display === "block" ? "none" : "block";
});

searchBox.addEventListener("click", () => {
  searchModal.style.display = "block";
});

filterWrapper.addEventListener("click", () => {
  brandModal.style.display = "block";
  backdrop.style.display = "block";
});

backdrop.addEventListener("click", () => {
  brandModal.style.display = "none";
  backdrop.style.display = "none";
});
closeModal.addEventListener("click",()=>{
  brandModal.style.display = "none";
  backdrop.style.display = "none";
})