let city = document.getElementById("city")
let submit = document.getElementById("submit")
let nameValue = document.getElementById("name")
let temp = document.getElementById("temperature")
let desc = document.getElementById("desc")
let icon = document.getElementById("icon")
let humidity = document.getElementById("humidity")
let pressure = document.getElementById("pressure")
let wind = document.getElementById("wind")
let description = document.getElementById("description")

submit.addEventListener("click",function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=e18f31199117b6e0cd2e3ad96c922b3a`)
    .then (res => res.json())
    .then (data => {
        const temperature = data.main.temp;
        const weather_humidity = data.main.humidity;
        const weather_pressure = data.main.pressure;
        const wind_speed = data.wind.speed;
        const weather_description = data.weather[0].description;

        nameValue.innerHTML = data.name;
        temp.innerHTML = ` Temperature : ${(temperature-273.15).toFixed(2)}&deg; C `;
        humidity.innerHTML = ` Humidity : ${weather_humidity}% `;
        pressure.innerHTML = ` Pressure : ${weather_pressure} mbar`;
        wind.innerHTML = ` Wind Speed : ${wind_speed} km/h`;
        description.innerHTML = ` Weather Summery : ${weather_description}`;
        img = data.weather[0].icon;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${img}@2x.png" alt=>`
    })
    .catch (err => alert("Enter City Name Correctly!!!"))
})