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
import allData from "./car-widget-data"
const searchBox = document.querySelector(".search-box");
const searchModal = document.querySelector(".search-modal");
const crossIcon = document.querySelector(".fa-times");
const carToggle = document.querySelector(".car-toggle");
const carToggleSub = document.querySelector(".car-toggle-submenu");
const filterWrapper = document.querySelector(".filters-wrapper-right");
const brandModal = document.querySelector(".brand-modal");
const body = document.querySelector("body");
const backdrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".brand-modal-close");
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
  body.style.overflowY = "hidden";
});

backdrop.addEventListener("click", () => {
  brandModal.style.display = "none";
  backdrop.style.display = "none";
  body.style.overflowY = "scroll";
});
closeModal.addEventListener("click", () => {
  brandModal.style.display = "none";
  backdrop.style.display = "none";
  body.style.overflowY = "scroll";
});

allData.forEach(car => {
  let li = document.createElement("li");
  li.innerHTML = `<li>
  <div>
    <a href="#">
      <span>
        <img
          class="w-8"
          src="./assets/volvo.svg "
          alt="volvo-car-icon"
        />
      </span>
      <span>
        <span>ولوو XC90</span>
        <span>اینسکریپشن</span>
      </span>
      <span>
        <span> 2.56% </span>
        <i class="fa-solid fa-caret-up"></i>
        <svg
          data-v-7a9905c6=""
          data-v-4640d577=""
          viewBox="0 0 24 24"
          class="vehicle-tolerance__currency-badge w-6 icon"
        >
          <path
            d="M12 16c-2.58 0-5.12-.59-7.44-1.73L4 14V9h2v3.73c3.82 1.68 8.18 1.68 12 0V9h2v5l-.56.27A16.82 16.82 0 0 1 12 16M8 9h8v2H8z"
            fill="currentColor"
          ></path>
        </svg>
        <span>20,000,000,000</span>
      </span>
    </a>
  </div>
</li>`
});