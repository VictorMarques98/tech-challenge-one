import { WeatherReport } from "../types";

function formatDate(): string {
  const date = new Date();
  return date.toLocaleDateString('en-US');
}

function createWeatherHTML(data: WeatherReport): string {
  const { name, sys, main, coord, wind, visibility } = data;

  return `
    <div class="header">
      <div>&nbsp;</div>
      <h2>${formatDate()}</h2>
      <span>ºC</span>
    </div>
    <div class="body">
      <div class="content">
        <h2>${name}, ${sys.country}</h2>
        <h1>${main.temp}º</h1>
        <h3>Feels like ${main.feels_like}º</h3>
      </div>
      <div class="image">
        <img src="./assets/3D Ico_12.png" alt />
      </div>
    </div>
    <div class="divider"></div>
    <div class="hours">
      <div class="content">
        <h2>Temp Max</h2>
        <h3>${main.temp_max}º</h3>
      </div>
      <div class="content">
        <h2>Temp Min</h2>
        <h3>${main.temp_min}º</h3>
      </div>
      <div class="content">
        <h2>Pressure</h2>
        <h3>${main.pressure}</h3>
      </div>
      <div class="content">
        <h2>Humidity</h2>
        <h3>${main.humidity}</h3>
      </div>
    </div>
    <div class="divider"></div>
    <div class="week">
      <div class="content">
        <h3>Latitude</h3>
        <div class="image">
          <img src="./assets/3D Ico_01.png" alt />
        </div>
        <div>
          <h3>${coord.lat}</h3>
        </div>
      </div>
      <div class="content">
        <h3>Longitude</h3>
        <div class="image">
          <img src="./assets/3D Ico_02.png" alt />
        </div>
        <div>
          <h3>${coord.lon}</h3>
        </div>
      </div>
      <div class="content">
        <h3>Wind Speed</h3>
        <div class="image">
          <img src="./assets/3D Ico_03.png" alt />
        </div>
        <div>
          <h3>${wind.speed}</h3>
        </div>
      </div>
      <div class="content">
        <h3>Visibility</h3>
        <div class="image">
          <img src="./assets/3D Ico_04.png" alt />
        </div>
        <div>
          <h3>${visibility}</h3>
        </div>
      </div>
    </div>
  `;
}

export function updateWeatherInfo(data: WeatherReport): void {
  const weatherInfo = document.getElementById('weatherInfo');

  if (!weatherInfo) {
    console.error('Element with id "weatherInfo" not found');
    return;
  }

  weatherInfo.style.display = "block";
  weatherInfo.innerHTML = createWeatherHTML(data);
}