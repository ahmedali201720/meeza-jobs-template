const countryElement = document.getElementById("country");
const cityElement = document.getElementById("city");
const specElement = document.getElementById("specialization");
const countElement = document.getElementById("count");

let countryChoice = null;
let cityChoice = null;
let specializationChoice = null;
let countChoice = null;

if (countryElement) {
  countryChoice = new Choices(countryElement);
}
if (cityElement) {
  cityChoice = new Choices(cityElement);
}
if (specElement) {
  specializationChoice = new Choices(specElement);
}
if (countElement) {
  countChoice = new Choices(countElement);
}
