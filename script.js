let API_KEY = "29fb3bc27ac4b9d6eb29d236e5a9a9be";
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const Full_Url = `${URL}?q=${city}&appid=${API_KEY}`;
  const weatherPromise = fetch(Full_Url);
  return weatherPromise.then((response) => {
    return response.json();
  });
};
function selectCity() {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
const showWeatherData = (weatherData) => {
  const sunriseTimestamp = weatherData.sys.sunrise * 1000;
  const sunsetTimestamp = weatherData.sys.sunset * 1000;

  const sunriseTime = new Date(sunriseTimestamp).toLocaleTimeString();
  const sunsetTime = new Date(sunsetTimestamp).toLocaleTimeString();

  document.getElementById("city-name").innerText = weatherData.name;

  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;

  document.getElementById("temp").innerText = weatherData.main.temp;

  document.getElementById("humidity").innerText = weatherData.main.humidity;

  document.getElementById("wind-speed").innerText = weatherData.wind.speed;

  document.getElementById("sunrise").innerText = sunriseTime;

  document.getElementById("sunset").innerText = sunsetTime;
};
