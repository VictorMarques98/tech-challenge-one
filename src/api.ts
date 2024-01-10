export async function getWeather(location: string, apiKey: string) {
  const response = await fetch(`https://api.openweathermap.org/data/3.0/weather?q=${location}&appid=${apiKey}`);
  const data = await response.json();
  return data;
}