// const menuItems = document.querySelectorAll(".menu-items ul li");
// const subMenus = document.querySelector(".submenu");
// menuItems.forEach((item) => {
//   item.addEventListener("mouseover", ()=>{
//     menuItemsHandler(subMenus)
//   });
// });

function menuItemsHandler(elements) {

    elements.style.display = "block";

}

const searchBox = document.querySelector(".search-box");
const searchModal = document.querySelector(".search-modal");
const crossIcon = document.querySelector(".fa-times");
const downIcon = document.querySelector(".fa-caret-down");
const carToggleSub = document.querySelector(".car-toggle-submenu")

searchBox.addEventListener("click", () => {
  searchModal.style.display = "block";
});
 crossIcon.addEventListener("click",()=>{
    searchModal.style.display="none"
 })

downIcon.addEventListener("click",()=>{
    
carToggleSub.style.display = carToggleSub.style.display === "block" ? "none": "block"
})

