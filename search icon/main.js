const searchBar = document.querySelector(".Search-bar");
const magnifier = document.querySelector(".magnifier");
magnifier.addEventListener("click",()=>{
    searchBar.classList.toggle("active");
})