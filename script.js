const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiKey = "d3064a28b46ad7f335326bc63c94a1d8";

const searchBtn = document.querySelector("#search-btn");
const cityInput = document.querySelector("#city");
const weatherInfo = document.querySelector("#weather-info");
const errorMsg = document.querySelector("#error");

async function getWeather(city) {
    try{
        // first check internet
        if(!navigator.onLine){
            errorMsg.innerText = "No Internet Connection!";
            weatherInfo.classList.add("hidden");
            return;
        } else{
            errorMsg.innerText = "Loading..."
        }

    const response = await fetch(url + city + `&appid=${apiKey}`);

    if(response.status === 404){
        errorMsg.innerText = "City not found!";
        weatherInfo.classList.add("hidden");
        return;
    }

        const data = await response.json();
        errorMsg.innerText = "";

    document.querySelector("#city-name").innerText = data.name;
    document.querySelector("#temp").innerText = Math.round(data.main.temp) + "℃";
    document.querySelector("#desc").innerText = data.weather[0].description;
    document.querySelector("#humidity").innerText = "Humidity: " + data.main.humidity + "%";
    document.querySelector("#wind").innerText = "Wind: " + data.wind.speed + "km/hr";

    const weatherMain = data.weather[0].main.toLowerCase();

if(weatherMain.includes("clouds")){
    document.body.style.background = "url(cloudy-sky.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.objectFit = "cover";
}
else if(weatherMain.includes("clear")){
    document.body.style.background = "url(clear-sky.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.objectFit = "cover";
}
else if(weatherMain.includes("rain")){
    document.body.style.background = "url(rainy-sky.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.objectFit = "cover";;
}
else if(weatherMain.includes("sunny")){
    document.body.style.background = "url(sunny-sky.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.objectFit = "cover";
}
else{
    document.body.style.background = "linear-gradient(to right, #89f7fe, #66a6ff)";
}

    document.querySelector("#icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherInfo.classList.remove("hidden");

} catch(error){
    // if fetch fail(no internet suddenly)
    errorMsg.innerText = "No Internet Connection!";
    weatherInfo.classList.add("hidden");
}
}

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
        if(city === ""){
            errorMsg.innerText = "Please enter a city name!";
            weatherInfo.classList.add("hidden");
        } else {
            getWeather(city);
        }
});

