import { carData } from "./car-widget-data.js";
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
const ulElement = document.querySelector(".splide-container");
const carSubmenu = document.querySelector(".car-sub-menu");
const carLi = document.getElementById("car");
const motorcycleLi = document.getElementById("motorcycle");
const motorSubmenu = document.querySelector(".motor-sub-menu");
const heavyCarLi = document.getElementById("heavy-car");
const heavySubmenu = document.querySelector(".heavy-sub-menu");
const bamaLi = document.getElementById("bama");
const bamaSubmenu = document.querySelector(".bama-sub-menu");
const accountElement = document.getElementById("account");
const accountSubmenu = document.querySelector(".account-sub-menu");

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

carData.forEach((car) => {
  let li = document.createElement("li");
  li.classList.add("splide-li");
  li.innerHTML = `
  <div>
    <a href="#">
      <span class="splide-img" >
        ${car.image}
      </span>
      <span class="splide-info" >
        <span>${car.name}</span>
        <span class="splide-title" >${car.title}</span>
      </span>
      <span class="splide-price" >
        <span class="font-yekan text-[1.2rem] ">${car.percent}</span>
        <i class="fa-solid fa-caret-up text-[#338e5a] box-content mx-1 text-[1.5rem] mt-1 align-middle"></i>
        <svg
          data-v-7a9905c6=""
          data-v-4640d577=""
          viewBox="0 0 24 24"
          class="vehicle-tolerance__currency-badge w-6 icon  "
        >
          <path
            d="M12 16c-2.58 0-5.12-.59-7.44-1.73L4 14V9h2v3.73c3.82 1.68 8.18 1.68 12 0V9h2v5l-.56.27A16.82 16.82 0 0 1 12 16M8 9h8v2H8z"
            fill="currentColor"
          ></path>
        </svg>
        <span class="text-[.9rem] mt-1">${car.price}</span>
      </span>
    </a>
  </div>`;
  ulElement.appendChild(li);
});

// Show/hide car submenus
const submenus = [carSubmenu, motorSubmenu, heavySubmenu, bamaSubmenu];
const submenuTriggers = [carLi, motorcycleLi, heavyCarLi, bamaLi];

submenuTriggers.forEach((trigger, index) => {
  trigger.addEventListener("mouseover", () => {
    submenus.forEach((submenu) => {
      submenu.style.display = "none";
    });
    submenus[index].style.display = "block";
  });

  trigger.addEventListener("mouseout", () => {
    submenus[index].style.display = "none";
  });
});

// Show/hide account submenu
accountElement.addEventListener("mouseover", () => {
  accountSubmenu.style.display = "block";
});

accountElement.addEventListener("mouseout", () => {
  accountSubmenu.style.display = "none";
});

// price range slider

const getValues = () => {
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
  let slider_one = parseFloat(slides[0].value);
  let slider_two = parseFloat(slides[1].value);

  if (slider_one > slider_two) {
    let tmp = slider_two;
    slider_two = slider_one;
    slider_one = tmp;
  }

  let displayElement = parent.getElementByClassName("range-value")[0];

  displayElement.innerHTML = "$" + slider_one + "  - $" + slider_two;
};

window.onload = function () {
  let sliderSection = document.getElementsByClassName("price-range-wrapper");
  for (let x = 0; x < sliderSection.length; x++) {
    let sliders = sliderSection[x].getElementsByTagName("input");

    for (let y = 0; y < sliders.length; y++) {
      if (sliders[y].style === "range") {
        sliders[y].oninput = getValues;

        sliders[y].oninput();
      }
    }
  }
};
// HAmburger Menu

// const hamburger = document.querySelector(".hamburger-button");
// const hamBackdrop = document.querySelector(".ham-backdrop");
// const hamContainer = document.querySelector(".hamburger-container")

// hamburger.addEventListener("click", () => {
//   hamBackdrop.style.display = "block";
//   hamContainer.style.display ="block"

// });

// crossIcon.addEventListener("click",()=>{
//   hamBackdrop.style.display="none";

// })

// hamBackdrop.addEventListener("click",()=>{
//   hamBackdrop.style.display="none"
// })
