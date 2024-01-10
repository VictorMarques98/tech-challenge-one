import { getWeather } from './api/getWeather.ts';
import { updateWeatherInfo } from './dom/createWeatherHTML.ts';
import { APIKEY } from './constants/config.ts';

const submitLocationInput = document.getElementById('submitLocationInput') as HTMLButtonElement;
const locationInput = document.getElementById('locationInput') as HTMLInputElement;
const inputScreen = document.getElementById('inputScreen');
const loader = document.getElementById('loader');

const handleLocationSubmit = async (e: Event) => {
    e.preventDefault();
    const location = locationInput?.value ?? '';

    if (!location) {
        alert('Please enter a location');
        return;
    }

    if (inputScreen) {
        inputScreen.style.display = "none";
    }

    if (loader) {
        loader.style.display = "flex";
    }

    try {
        const data = await getWeather(location, APIKEY);
        updateWeatherInfo(data);

        if (loader) {
            loader.style.display = "none";
        }

    } catch (error) {
        if (inputScreen) {
            inputScreen.style.display = "flex";
        }

        if (loader) {
            loader.style.display = "none";
        }
        alert(error);
    }
};

submitLocationInput?.addEventListener('click', handleLocationSubmit);