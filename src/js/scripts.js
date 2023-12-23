// Get the color picker element
var colorPicker = document.getElementById('color-picker');

// Add an event listener to the color picker
colorPicker.addEventListener('input', function () {
  // Get the selected color value
  var selectedColor = colorPicker.value;

  // Set the background color of the body
  document.body.style.backgroundColor = selectedColor;
});