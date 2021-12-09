import React from 'react'

function CityCard({weatherData}) {
    return (
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
    )
}

export default CityCard
