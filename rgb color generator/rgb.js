document.addEventListener('DOMContentLoaded', function () {
    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');

    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');

    const rgbInfo = document.getElementById('rgbInfo');

    redSlider.addEventListener('input', updateRedColor);
    greenSlider.addEventListener('input', updateGreenColor);
    blueSlider.addEventListener('input', updateBlueColor);

    function updateRedColor() {
        const redValues = redSlider.value;
        redValue.innerHTML = redValues;
    }
    function updateGreenColor() {
        const greenValues = greenSlider.value;
        greenValue.innerHTML = greenValues;
    }
    function updateBlueColor() {
        const blueValues = blueSlider.value;
        blueValue.innerHTML = blueValues;
    }
});