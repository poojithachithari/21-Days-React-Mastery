import React, { useState } from 'react'
import WeatherCard from './WeatherCard'

const WeatherForm = () => {
    const [cityName, setCityName] = useState('')
    const [searchCity, setSearchCity] = useState('')
    
    function handleChange(e) {
        setCityName(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        if (cityName.trim()) {
            setSearchCity(cityName)
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cityName">Enter City Name:</label>
                <input 
                    type="text" 
                    name="cityName" 
                    id="cityName" 
                    value={cityName} 
                    onChange={handleChange}
                    placeholder="e.g., London"
                />
                <button type="submit">Search</button>
            </form>
            
            {searchCity && <WeatherCard city={searchCity} />}
        </div>
    )
}

export default WeatherForm