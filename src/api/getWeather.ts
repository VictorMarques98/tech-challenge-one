import { WeatherReport } from "../types";

export async function getWeather(location: string, apiKey: string) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=metric`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('An error occurred while fetching the weather data. Please try again later.');
  }
  const data: WeatherReport = await response.json();
  return data;
}