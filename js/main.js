let ratingButtoms = document.querySelectorAll(".rating li");
let ratingList = document.querySelector(".rating");
let submitButton = document.querySelector("input[type='submit']");
let mainCard = document.querySelector(".rate");
let thanksCard = document.querySelector(".thanks");
// let valRate = document.querySelector("ul .active");
let valRate = 3;
let span = document.querySelector(".val");

console.log();
// console.log(ratingButtoms);
ratingList.addEventListener("click", function (e) {
  ratingButtoms.forEach((e) => e.classList.remove("active"));
  e.target.classList.add("active");
  valRate = e.target.innerText;
});

submitButton.addEventListener("click", function (e) {
  span.innerHTML = valRate;

  thanksCard.classList.remove("hide");
  mainCard.classList.add("hide");
});
