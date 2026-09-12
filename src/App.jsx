import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import { searchCity, getWeather } from "./utils/api";

function App() {
    const [status, setStatus] = useState("idle");
    const [weather, setWeather] = useState(null);
    const [cityName, setCityName] = useState("");
    const [error, setError] = useState("");

    const handleSearch = async (name) => {
        setStatus("loading");
        setError("");

        try {
            const city = await searchCity(name);        // запрос 1: геокодинг
            const forecast = await getWeather(city.latitude, city.longitude); // запрос 2
            setWeather(forecast);
            setCityName(`${city.name}, ${city.country}`);
            setStatus("success");
        } catch (err) {
            setError(err.message);
            setStatus("error");
        }
    };

    return (
        <div className="app">
            <h1>Weather Forecast</h1>
            <SearchBar onSearch={handleSearch} disabled={status === "loading"} />

            {status === "loading" && <p className="status">Loading...</p>}

            {status === "error" && <p className="error">{error}</p>}

            {status === "success" && (
                <>
                    <CurrentWeather weather={weather} cityName={cityName} />
                    <ForecastList daily={weather.daily} />
                </>
            )}

            {status === "idle" && <p className="status">Search for a city to see the forecast</p>}
        </div>
    );
}

export default App;