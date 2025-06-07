const imageContainer = document.querySelector(".image-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addNewImages();
});

function addNewImages() {
  const newImg = document.createElement("img");
  newImg.src = `https://picsum.photos/300?random=${Math.floor(
    Math.random() * 2000
  )}`;
  newImg.classList.add("img");
  imageContainer.appendChild(newImg);
}
