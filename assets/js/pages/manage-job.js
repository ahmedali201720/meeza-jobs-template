function pageReady() {
  // Choice Js Elements
  const categoriesElement = document.getElementById("categories");
  const typeElement = document.getElementById("type");
  const skillElement = document.getElementById("skills");
  const specialityElement = document.getElementById("speciality");
  const countryElement = document.getElementById("country");
  const govElement = document.getElementById("governorate");
  const levelElement = document.getElementById("level");
  const eduLevelElement = document.getElementById("eduLevel");
  const expElement = document.getElementById("experienceEl");
  let categoryChoice = null;
  let typeChoice = null;
  let skillChoice = null;
  let specialityChoice = null;
  let countryChoice = null;
  let govChoice = null;
  let levChoice = null;
  let eduLevelChoice = null;
  let expElementChoice = null;
  if (categoriesElement) {
    categoryChoice = new Choices(categoriesElement);
  }
  if (typeElement) {
    typeChoice = new Choices(typeElement);
  }
  if (skillElement) {
    skillChoice = new Choices(skillElement);
  }
  if (specialityElement) {
    specialityChoice = new Choices(specialityElement);
  }
  if (countryElement) {
    countryChoice = new Choices(countryElement);
  }
  if (govElement) {
    govChoice = new Choices(govElement);
  }
  if (levelElement) {
    levChoice = new Choices(levelElement);
  }
  if (eduLevelElement) {
    eduLevelChoice = new Choices(eduLevelElement);
  }
  if (expElement) {
    expElementChoice = new Choices(expElement);
  }
  // Date Ranger Picker
  if ($(".rangeinput")?.length) {
    $(".rangeinput").daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1970,
    });
  }
  // CKEditor
  if (document.getElementById("description")) {
    CKEDITOR.replace("description");
  }
  if (document.getElementById("responsibilities")) {
    CKEDITOR.replace("responsibilities");
  }
  if (document.getElementById("qualifications")) {
    CKEDITOR.replace("qualifications");
  }
}

document.addEventListener("DOMContentLoaded", pageReady, false);
