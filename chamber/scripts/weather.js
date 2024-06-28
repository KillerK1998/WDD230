const apiKey = '851406e8c24563b4eadba0961fac71d8'; 
const cityName = 'Saint George,US'; 

async function getWeather() {
    try {
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`);
        const currentWeatherData = await currentWeatherResponse.json();

        document.getElementById('current-temperature').textContent = Math.round(currentWeatherData.main.temp);
        document.getElementById('weather-description').textContent = currentWeatherData.weather[0].description;

        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`);
        const forecastData = await forecastResponse.json();

        document.querySelector('.day1-forecast').textContent = Math.round(forecastData.list[0].main.temp);
        document.querySelector('.day2-forecast').textContent = Math.round(forecastData.list[8].main.temp);
        document.querySelector('.day3-forecast').textContent = Math.round(forecastData.list[16].main.temp);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


