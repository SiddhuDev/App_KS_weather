const apiKey = '085e575ad88b79c232c40dec714e9d32'; 

document.getElementById('searchButton').addEventListener('click', fetchWeather);

function fetchWeather() {
    const location = document.getElementById('locationInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayWeather(data) {
    const location = `${data.name}, ${data.sys.country}`;
    const temperature = data.main.temp;
    const datetime = new Date(data.dt * 1000).toLocaleString();
    const additionalInfo = `Humidity: ${data.main.humidity}%, Wind Speed: ${data.wind.speed} m/s, Weather: ${data.weather[0].description}`;

    document.getElementById('location').textContent = location;
    document.getElementById('temperature').textContent = temperature;
    document.getElementById('datetime').textContent = datetime;
    document.getElementById('additionalInfo').textContent = additionalInfo;
    
    document.getElementById('weatherInfo').classList.remove('hidden');
}

document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});