const API_KEY = "a5973cf9bbee96e764dc9a6e9065905d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //   console.log(`You live in`, lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      weather.innerText = `, ${Math.trunc(data.main.temp)}º ${
        data.weather[0].main
      }`;
    });
}

function onGeoError() {
  alert(`Can't find you. Sorry, no weather for you.`);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
