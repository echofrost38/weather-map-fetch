import { createStore } from 'redux';

import './index.scss';

interface Weather {
    name: string;
    coord: {
        lat: number;
        lon: number;
    },
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    }
    sys: {
        country: string;
    }
}


// Define Redux actions
const SET_WEATHER = 'SET_WEATHER';

// Define action creators
function setWeather(weather: any) {
    return { type: SET_WEATHER, payload: weather };
}

// Define initial state
const initialState: { weatherData: any } = {
    weatherData: null,
};

// Define reducer
function weatherReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_WEATHER:
            return { ...state, weatherData: action.payload };
        default:
            return state;
    }
}

// Create Redux store
// const { createStore } = Redux;
const store = createStore(weatherReducer);


// Function to fetch weather data
async function fetchWeather(location: string) {
    const apiKey = 'bf72f1d80b19eddd49c67fc358b6fdfb';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        store.dispatch(setWeather(data));
    } catch (error) {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo!.innerHTML = `<p class="error-message">Invalid location input</p>`;
    }
}

// Event listener for button click
document.getElementById('fetchWeatherBtn')!.addEventListener('click', () => {
    const location = (document.getElementById('locationInput') as HTMLInputElement).value;
    fetchWeather(location);
});

// Subscribe to Redux store changes
store.subscribe(() => {
    const state = store.getState();
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo!.innerHTML = `
            <h2>${state.weatherData.name}</h2>
            <p>Country: ${state.weatherData.sys.country}</p>
            <p>Latitude: ${state.weatherData.coord.lat}</p>
            <p>Longgitue: ${state.weatherData.coord.lon}</p>
            <p>Temperature: ${state.weatherData.main.temp} K</p>
            <p>Wind Deg: ${state.weatherData.wind.deg}</p>
            <p>Wind Speed: ${state.weatherData.wind.deg}</p>
            <p>Humidity: ${state.weatherData.main.humidity}</p>
            <p>Pressure: ${state.weatherData.main.pressure}</p>
        `;
    if (state.weatherData) {
    } else {
        weatherInfo!.innerHTML = '<p>No weather data available</p>';
    }
});
