const menuIcon = document.querySelector(".hamburger-button ")
const classTitles = document.querySelector(".titles")

menuIcon.addEventListener("click",()=>{
    classTitles.classList.toggle("titles")
})