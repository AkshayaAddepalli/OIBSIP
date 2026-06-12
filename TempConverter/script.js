
function convertTemperature() {

    let temp = document.getElementById("temperature").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result = document.getElementById("result");
    let status = document.getElementById("status");

    if (temp === "" || isNaN(temp)) {
        result.innerHTML = "❌ Invalid Input";
        result.style.color = "red";
        status.innerHTML = "";
        return;
    }

    temp = parseFloat(temp);

    if (from === "K" && temp < 0) {
        result.innerHTML = "❌ Kelvin cannot be negative";
        result.style.color = "red";
        status.innerHTML = "";
        return;
    }

    let converted;

    if (from === to) {
        converted = temp;
    }

    else if (from === "C" && to === "F") {
        converted = (temp * 9/5) + 32;
    }
    else if (from === "C" && to === "K") {
        converted = temp + 273.15;
    }

    else if (from === "F" && to === "C") {
        converted = (temp - 32) * 5/9;
    }
    else if (from === "F" && to === "K") {
        converted = (temp - 32) * 5/9 + 273.15;
    }

    else if (from === "K" && to === "C") {
        converted = temp - 273.15;
    }
    else if (from === "K" && to === "F") {
        converted = (temp - 273.15) * 9/5 + 32;
    }

    let unit = "";

    if (to === "C")
        unit = "°C";
    else if (to === "F")
        unit = "°F";
    else
        unit = "K";

    result.style.color = "#007bff";
    result.innerHTML = `${converted.toFixed(2)} ${unit}`;

    status.innerHTML = "✅ Conversion Successful";
    status.style.color = "#00c853";
}

function clearFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("fromUnit").selectedIndex = 0;
    document.getElementById("toUnit").selectedIndex = 0;
    document.getElementById("result").innerHTML = "--";
    document.getElementById("status").innerHTML = "";
}

function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const date = now.toLocaleDateString('en-US', options);
    const time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML =
        `📅 ${date}<br>🕒 ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

document.getElementById("temperature")
.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        convertTemperature();
    }
});