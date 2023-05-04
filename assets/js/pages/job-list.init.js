var singleCategories,
  singleLocation = new Choices("#choices-single-location"),
  singleCategorie = document.getElementById("choices-single-categories");
singleCategorie &&
  (singleCategories = new Choices("#choices-single-categories"));

const sectorElement = document.getElementById("choices-sector");
let sectorSelect = null;

const specialistElement = document.getElementById("choices-specialist");
let specialistSelect = null;

if (sectorElement) {
  sectorSelect = new Choices(sectorElement);
}

if (specialistElement) {
  specialistSelect = new Choices(specialistElement);
}
