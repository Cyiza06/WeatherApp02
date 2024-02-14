if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.error("Geolocation is not supported by your browser");
  }

  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getCityName(latitude, longitude);
  }
  function errorCallback(error) {
    console.error(`Error getting location: ${error.message}`);
}
let weatherIcon1 = document.querySelector('.weathericon1');

function getCityName(latitude, longitude) {
    
    const apiKey = '8220fed63641b31dff665b5334793302';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=current&appid=${apiKey}&units=metric`;
   
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.querySelector(".city0").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML =Math.round(data.main.temp)+ '&deg;C';

        if (data.weather[0].main == "Clouds") {
            weatherIcon1.src = "images/FORUSE/cloud.png"   
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon1.src = "images/FORUSE/sun.png"   
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon1.src = "images/FORUSE/rainfall.jpg"   
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon1.src = "images/FORUSE/drizzle.png"   
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon1.src = "images/FORUSE/mist.png"   
        } 

    })
    .catch(error => {
        console.error("Error fetching city name:", error);
    });
}