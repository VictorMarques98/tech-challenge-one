export function updateWeatherInfo(data: any) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
      <h2>${data.name}</h2>
      <p>${data.weather[0].description}</p>
      <p>${data.main.temp}°F</p>
  `;
}