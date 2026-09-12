import { useState } from "react";

function SearchBar({ onSearch, disabled }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = city.trim();
        if (trimmed) {
            onSearch(trimmed);
        }
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={disabled}
            />
            <button type="submit" disabled={disabled}>
                Search
            </button>
        </form>
    );
}

export default SearchBar;