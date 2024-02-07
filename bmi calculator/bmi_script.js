function calculateBMI() {
    const gender = document.getElementById('gender-select').value.trim();
    const age = document.getElementById('age').value.trim();
    const height_feet = document.getElementById('heightft').value.trim();
    const height_in = document.getElementById('heightin').value.trim();
    const weight = document.getElementById('weight').value.trim();
    const final_height_in_meter = parseFloat(((height_feet * 12) + parseInt(height_in)) / 39.37);
    const bmi = parseInt(weight) / Math.pow(final_height_in_meter, 2);
    const result = document.getElementById('result');
    result.innerHTML = "Your BMI is : " + bmi.toFixed(2);
    const result2 = document.getElementById('comment');
    result2.classList.remove('hidden');
    if (bmi < 18.5) {
        result2.innerHTML = "You are underweight!";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        result2.innerHTML = "You are normal weight!";
    }
    else if (bmi >= 25 && bmi < 30) {
        result2.innerHTML = "You are over weight!";
    }
    else if (bmi >= 30 && bmi < 40) {
        result2.innerHTML = "You are obese weight!";
    }
    else {
        result2.innerHTML = "You are extreme obese weight!";
    }

}