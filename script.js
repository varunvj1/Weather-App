
/** API_KEY for maps api **/
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * Something like:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const full_url = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;

  const weatherPromise = fetch(full_url);

  return weatherPromise.then((response) => {
    return response.json();
  })
}

/** Retrieve city input and get the weather data **/
searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city).then((response) => {
    // console.log(response);
    showWeatherData(response);
  }).catch((error) => {
    console.log(error);
  })

}

/** Show the weather data in HTML **/
showWeatherData = (weatherData) => {
  //Display City Name
  document.getElementById("city-name").innerText = weatherData.name;

  //Display Weather Type
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;

  //Display temperature
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}

