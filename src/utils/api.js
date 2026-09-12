const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

export async function searchCity(name) {
    const response = await fetch(
        `${GEO_URL}?name=${encodeURIComponent(name)}&count=1&language=en&format=json`
    );

    if (!response.ok) {
        throw new Error(`Geocoding failed: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
    }

    return data.results[0]; // { latitude, longitude, name, country, ... }
}

export async function getWeather(latitude, longitude) {
    const response = await fetch(
        `${FORECAST_URL}?latitude=${latitude}&longitude=${longitude}` +
        `&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
    );

    if (!response.ok) {
        throw new Error(`Forecast request failed: ${response.status}`);
    }

    return await response.json();
}