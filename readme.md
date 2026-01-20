<h1>Weather App</h1>

<p>This project is a functional <b>Weather Application</b> built using <b>HTML, CSS and JavaScript.</b> Users can search for any city, and the app displays temperature, weather conditions, humidity, and wind speed using real-time data from a weather API.</p>

<h2>Features</h2>

<ul>
    <li>Search weather by city name</li>
    <li>Real-time temperature, condition, humidity & wind details</li>
    <li>Weather icons based on condition (sun, rain, clouds, etc)</li>
    <li>Error handling for invalid cities</li>
    <li>Fast and lightweight</li>
</ul>

<h2>Technologies Used</h2>

<ul>
    <li>HTML -> Input box, weather details UI</li>
    <li>CSS -> Styling, layout, icons, responsiveness</li>
    <li>JavaScript -> Fetch API, API integration, DOM updates</li>
</ul>

<h2>How It Works</h2>

<ul>
    <li>User enters a city name in the search bar</li>
    <li>JavaScript fetches weather details from OpenWeatherMap API (or any chosen API)</li>
    <li> The response contain data like:
    <ul>
        <li>Temperature</li>
        <li>Weather condition</li>
        <li>Humidity</li>
        <li>Wind spedd</li>
        <li>Weather icon info</li>
    </ul>
    </li>
    <li>The UI updates instantly with these values</li>
    <li>If city is invalid, an error message is shown</li>
</ul>

<h2>API Used</h2>

<p>https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_key}&units=metric</p>

<h2>Folder Structure</h2>

<pre>/Weather-app
|->index.html
|->style.css
|->main.js</pre>

<h2>How to Run</h2>

<p>Just open 'index.html' in any browser -no server required.</p>

<h2>Validations Added</h2>

<ul>
    <li>Prevent empty search input</li>
    <li>Show "City not found" message for wrong names</li>
    <li>Remove old results before loading new ones</li>
</ul>

<h2>Future Improvements</h2>

<ul>
    <li>Add 5-day weather forecast</li>
    <li>Add auto-detect location (geolocation)</li>
    <li>Add theme based on weather (sunny = yellow, rainy = blue)</li>
    <li>Add animated icons</li>
</ul>

<h2>Author:- Arzoo Mansuri</h2>