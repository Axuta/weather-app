import { WEATHER_CODES } from "../utils/weatherCodes";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function ForecastList({ daily }) {
    const days = daily.time.map((dateStr, i) => ({
        date: dateStr,
        max: daily.temperature_2m_max[i],
        min: daily.temperature_2m_min[i],
        code: daily.weathercode[i],
    }));

    return (
        <div className="forecast">
            {days.map((day) => (
                <div className="forecast-day" key={day.date}>
                    <span>{WEEKDAYS[new Date(day.date).getDay()]}</span>
                    <span>{WEATHER_CODES[day.code] ?? "—"}</span>
                    <span>
            {Math.round(day.max)}° / {Math.round(day.min)}°
          </span>
                </div>
            ))}
        </div>
    );
}

export default ForecastList;