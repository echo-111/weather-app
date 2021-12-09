import React, { useState } from 'react';
import Input from './component/input';
import './App.css';
import CityCard from './component/cityCard';

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
            <Input 
                city={city}
                setCity={setCity}
                getWeather={getWeather}
            />
            <CityCard 
                weatherData={weatherData}
            />
        </div>
    )
}

export default App
