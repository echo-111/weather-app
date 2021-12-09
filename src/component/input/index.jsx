import React from 'react';

function Input({getWeather, city, setCity}) {

    return (
            <input 
            className="input" 
            placeholder="City..." 
            onChange={(e)=>setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            />
    )
}

export default Input;