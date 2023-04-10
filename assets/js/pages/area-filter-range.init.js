var slider1 = document.getElementById("slider1");
noUiSlider.create(slider1, {
  start: [200],
  step: 5,
  range: { min: [200], max: [100000] },
});
var slider1Value = document.getElementById("slider1-span");
slider1.noUiSlider.on("update", function (e, r) {
  slider1Value.innerHTML = e[r];
});
