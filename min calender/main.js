const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const yearName = document.getElementById("year");

const date = new Date();
const month = date.getMonth()
const weekday = date.getDay();

monthName.innerText = date.toLocaleString("en",{
    month:"long"
})
dayName.innerText = date.toLocaleString("en", {
  weekday: "long",
});
dayNumber.innerText = date.getDate()

yearName.innerText = date.getFullYear()