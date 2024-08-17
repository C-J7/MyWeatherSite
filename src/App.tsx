import { useState } from 'react'
import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

const App: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const fetchWeather = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form submission
        if (!city) {
            alert('Please enter a city name.');
            return;
        }

        try {
            const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=f73e155ed2774e3ead3121714241708&q=${city}`;
            const weatherResponse = await fetch(weatherApiUrl);
            if (!weatherResponse.ok) {
                throw new Error('Weather data not found');
            }
            const data = await weatherResponse.json();
            setWeatherData(data);
            setError('');
        } catch (err) {
            setError((err as Error).message);
            setWeatherData(null);
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', textAlign: 'center' }}>
            <h1>Weather App</h1>
            <form onSubmit={fetchWeather} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    style={{ padding: '10px', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button type="submit" style={{ padding: '10px', marginLeft: '10px', borderRadius: '5px', backgroundColor: '#007BFF', color: '#fff', border: 'none' }}>
                    Get Weather
                </button>
            </form>

            {error && <div style={{ color: 'red' }}>Error: {error}</div>}

            {weatherData && (
                <div className="weather-card">
                    <h2>{weatherData.location.name}</h2>
                    <p>Temperature: {weatherData.current.temp_c}°C</p>
                    <p>Description: {weatherData.current.condition.text}</p>
                    <p>Date: {weatherData.location.localtime}</p>
                    <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
                </div>
            )}
        </div>
    );
};

export default App;