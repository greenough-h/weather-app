let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let citySelector = document.querySelector("input.form-control");
citySelector.addEventListener("click", selectCity);

function selectCity() {
  let city = prompt("Enter a city");
  city = city.toLowerCase().trim();

  // let cityArray = Object.entries(weather);
  // cityArray = cityArray.forEach(elem);

  // function elem(obj) {
  //   obj[0];
  // }

  // if (cityArray.includes(city))

  let cityArray = ["paris", "tokyo", "lisbon", "san francisco", "oslo"];

  if (cityArray.includes(city)) {
    alert(
      `It is currently ${Math.round(weather[city].temp)}\u00B0C in ${
        city.charAt(0).toUpperCase() + city.slice(1)
      } with a humidity of ${weather[city].humidity}%`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }
}

let apiKey = "88724523008dc9e1be18f6eb6a959b67";
