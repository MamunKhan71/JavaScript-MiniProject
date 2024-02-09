document.addEventListener('DOMContentLoaded', function () {
    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');

    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');

    const rgbInfo = document.getElementById('rgbInfo');
    const colorPreview = document.getElementById('colorPreview');
    let red = 0;
    let green = 0;
    let blue = 0;
    redSlider.addEventListener('input', updateRedColor);
    greenSlider.addEventListener('input', updateGreenColor);
    blueSlider.addEventListener('input', updateBlueColor);

    function updateColor() {
        rgb = `bg-[rgb(${red},${green},${blue})]`;
        colorPreview.classList.forEach(className => {
            if (className.startsWith('bg-[rgb(')) {
                colorPreview.classList.remove(className);
            }
        });
        colorPreview.classList.add(rgb);
        rgbInfo.innerHTML = `rgb(${red},${green},${blue})`;
    }

    function updateRedColor() {
        const redValues = redSlider.value;
        red = redValues;
        updateColor();
        redValue.innerHTML = redValues;
    }

    function updateGreenColor() {
        const greenValues = greenSlider.value;
        green = greenValues;
        updateColor();
        greenValue.innerHTML = greenValues;
    }

    function updateBlueColor() {
        const blueValues = blueSlider.value;
        blue = blueValues;
        updateColor();
        blueValue.innerHTML = blueValues;
    }
});

function copyClipboard() {
    const red = document.getElementById('redSlider').value;
    const green = document.getElementById('greenSlider').value;
    const blue = document.getElementById('blueSlider').value;
    navigator.clipboard.writeText(`rgb(${red},${green},${blue})`);
}
