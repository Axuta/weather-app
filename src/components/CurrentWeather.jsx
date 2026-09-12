import { WEATHER_CODES } from "../utils/weatherCodes";

function CurrentWeather({ weather, cityName }) {
    const cw = weather.current_weather;

    return (
        <div className="current-weather">
            <h2>{cityName}</h2>
            <div className="current-main">
                <span className="temperature">{Math.round(cw.temperature)}°C</span>
                <span>{WEATHER_CODES[cw.weathercode] ?? "Unknown"}</span>
            </div>
            <p className="wind">Wind: {Math.round(cw.windspeed)} km/h</p>
        </div>
    );
}

export default CurrentWeather;