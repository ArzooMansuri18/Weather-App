const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiKey = "d3064a28b46ad7f335326bc63c94a1d8";

const searchBtn = document.querySelector("#search-btn");
const cityInput = document.querySelector("#city");
const weatherInfo = document.querySelector("#weather-info");
const errorMsg = document.querySelector("#error");

async function getWeather(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    if(response.status == 404){
        errorMsg.innerText = "City not found!";
        weatherInfo.classList.add("hidden");
    } else {
        const data = await response.json();
        errorMsg.innerText = "";

    document.querySelector("#city-name").innerText = data.name;

    document.querySelector("#temp").innerText = Math.round(data.main.temp) + "℃";

    document.querySelector("#desc").innerText = data.weather[0].description;

    document.querySelector("#icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherInfo.classList.remove("hidden");
    }
}

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if(city === ""){
        errorMsg.innerText = "Please enter a city name!";
    } else {
        getWeather(city);
    }
})