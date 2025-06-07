let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

// Function to handle the drop event
function handleDrop(e) {
  // Append the dragged element to the target box
  e.target.appendChild(selected);
  selected = null; // Reset the selected element
}

// Add dragover event listeners to both boxes to allow dropping
rightBox.addEventListener("dragover", function (e) {
  e.preventDefault(); // Prevent default behavior to allow drop
});
leftBox.addEventListener("dragover", function (e) {
  e.preventDefault(); // Prevent default behavior to allow drop
});

// Add drop event listeners to both boxes
rightBox.addEventListener("drop", handleDrop);
leftBox.addEventListener("drop", handleDrop);

// Iterate through the elements with class "list"
for (let list of lists) {
  // Add dragstart event listener to each list item
  list.addEventListener("dragstart", function (e) {
    // Store the selected element to be moved
    selected = e.target;
  });
}
