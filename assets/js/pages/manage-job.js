function pageReady() {
  // Choice Js Elements
  const categoriesElement = document.getElementById("categories");
  const typeElement = document.getElementById("type");
  const skillElement = document.getElementById("skills");
  let categoryChoice = null;
  let typeChoice = null;
  let skillChoice = null;
  if (categoriesElement) {
    categoryChoice = new Choices(categoriesElement);
  }
  if (typeElement) {
    typeChoice = new Choices(typeElement);
  }
  if (skillElement) {
    skillChoice = new Choices(skillElement);
  }
  // Date Ranger Picker
  $(".rangeinput").daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1970,
    maxYear: parseInt(moment().format("YYYY"), 10),
  });
  // CKEditor
  CKEDITOR.replace("description");
  CKEDITOR.replace("responsibilities");
  CKEDITOR.replace("qualifications");
  CKEDITOR.replace("experience");
}

document.addEventListener("DOMContentLoaded", pageReady, false);
