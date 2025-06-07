const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
  const xPos = event.clientX; // Use clientX for better positioning
  const yPos = event.clientY; // Use clientY for better positioning

  const spanE = document.createElement("span");
  spanE.style.left = xPos + "px";
  spanE.style.top = yPos + "px";

  const size = Math.random() *100;
  spanE.style.width = size+"px";
  spanE.style.height =size+"px"

  body.appendChild(spanE);


  setTimeout(() => {
    spanE.remove();
  }, 3000); // Match the timeout with the animation duration
});
