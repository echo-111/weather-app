import React, { useState } from 'react';
import './App.css';



function App() {

    const apiKey="3feabe70201b94ea2a632771ec7cf094";
    const [weatherData, setWeatherData]= useState([{}]);
    const [city, setCity]= useState("");

    const getWeather = (e) => {
        if(e.key==="Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then(
                response => response.json()
            ).then(
                data => (
                    setWeatherData(data)
                )    
            );
            setCity('');
        }
    }

    return (
        <div className="container">
            <input 
            className="input" 
            placeholder="City..." 
            onChange={(e)=>setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            />

            <div className="city-card">
                {typeof weatherData.main === 'undefined' ? (
                    <div>Welcome to react weather app. Search city to get the weather.</div>
                ): (
                    <div className="city">
                        <h2 className="city-name">
                            <span>{weatherData.name}</span>
                            <sup>{weatherData.sys.country}</sup>
                        </h2>
                        <div className="city-temp">
                            {Math.round(weatherData.main.temp)}
                            <sup>℃</sup>
                        </div>
                        <div className="info">
                            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
                            <p>{weatherData.weather[0].description}</p>
                        </div>
                    </div>
                )}  

                {weatherData.cod === "404" ? (
                    <p>City not found.</p>
                ):(
                    <>
                    </>
                )}

            </div>
        </div>
    )
}

export default App
