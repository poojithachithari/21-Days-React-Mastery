import React, { useEffect, useState } from 'react'

function WeatherCard({ city }) {
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (city) {
            getWeatherData()
        }
    }, [city])

    const getWeatherData = async () => {
        setLoading(true)
        setError('')
        
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API Key}&units=metric`
            
            const response = await fetch(url)
            const data = await response.json()
            
            if (response.ok) {
                setWeatherData(data)
            } else {
                setError(data.message || 'City not found!')
            }
        } catch (err) {
            setError('Failed to fetch weather data. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="weather-card">
            {loading && <h2>⏳ Fetching weather data...</h2>}
            
            {error && (
                <div className="error">
                    <h2>❌ Error</h2>
                    <p>{error}</p>
                </div>
            )}
            
            {weatherData && !loading && !error && (
                <div className="weather-info">
                    <h1>{weatherData.name}, {weatherData.sys.country}</h1>
                    <div className="temp-display">
                        <h2>{Math.round(weatherData.main.temp)}°C</h2>
                    </div>
                    <p className="weather-desc">{weatherData.weather[0].description}</p>
                    
                    <div className="weather-details">
                        <p>💧 Humidity: {weatherData.main.humidity}%</p>
                        <p>💨 Wind Speed: {weatherData.wind.speed} m/s</p>
                        <p>🌡️ Feels Like: {Math.round(weatherData.main.feels_like)}°C</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default WeatherCard