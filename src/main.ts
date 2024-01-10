import { getWeather } from './api.ts';
import { updateWeatherInfo } from './dom.ts';

document.getElementById('getWeather').addEventListener('click', async function() {
    const location = (document.getElementById('location') as HTMLInputElement).value;

    if (!location) {
        alert('Please enter a location');
        return;
    }

    const apiKey = 'a1fd1fd1e92b30997dc16651caf768d9';

    try {
        const data = await getWeather(location, apiKey);
        updateWeatherInfo(data);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the weather data. Please try again later.');
    }
});