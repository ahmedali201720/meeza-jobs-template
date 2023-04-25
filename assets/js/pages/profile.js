function pageReady() {
  // Choice Js Elements
  const languageElement = document.getElementById("language");
  const skillsElement = document.getElementById("skills");
  const cityElement = document.getElementById("city");
  let languageChoice = null;
  let skillsChoice = null;
  let cityChoice = null;
  if (languageElement) {
    languageChoice = new Choices(languageElement);
  }
  if (skillsElement) {
    skillsChoice = new Choices(skillsElement);
  }
  if (cityElement) {
    cityChoice = new Choices(cityElement);
  }
  // Date Ranger Picker
  $(".rangeinput").daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1970,
    maxYear: parseInt(moment().format("YYYY"), 10),
  });
}

document.addEventListener("DOMContentLoaded", pageReady, false);
