const converterForm = document.getElementById("converterForm");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const errorMessage = document.getElementById("error");
const resultsSection = document.getElementById("results");

converterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = Number(temperatureInput.value);
    const unit = unitSelect.value;

    errorMessage.textContent = "";
    resultsSection.hidden = true;

    if (temperatureInput.value.trim() === "" || !Number.isFinite(value)) {
        errorMessage.textContent = "Please enter a valid number.";
        return;
    }

    // Convert the entered value to Celsius first.
    let celsius;

    if (unit === "C") {
        celsius = value;
    } else if (unit === "F") {
        celsius = (value - 32) * 5 / 9;
    } else {
        celsius = value - 273.15;
    }

    // Absolute zero is 0 K, -273.15 °C or -459.67 °F.
    if (celsius < -273.15 - 0.0000001) {
        errorMessage.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById("celsius").textContent = celsius.toFixed(2) + " °C";
    document.getElementById("fahrenheit").textContent = fahrenheit.toFixed(2) + " °F";
    document.getElementById("kelvin").textContent = kelvin.toFixed(2) + " K";

    resultsSection.hidden = false;
});
