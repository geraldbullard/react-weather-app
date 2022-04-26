import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

import { cToF } from './components/WeatherCard/utils';

const AppWrapper = styled.div`
    margin: 10px auto;
    color: white;
`;

function App() {
    // A default state
    const [query, setQuery] = useState("Tampa, US"); 
    // The weather pbject
    const [weather, setWeather] = useState({
        temp: null,
        city: null,
        country: null,
        condition: null
    });

    // Make the API call to get the weather object
    const data = async q => {
        const apiRes = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=160144a9bdc82bd3c476d76c63eda415`
        );
        const resJSON = await apiRes.json();
        return resJSON;
    }

    // Handle when user clicks "Search" button
    const handleSearch = (e) => { 
        e.preventDefault();
        data(query).then(res => {
            console.log(res);
            setWeather({
                temp: res.main.temp,
                city: res.name,
                condition: res.weather[0].main,
                country: res.country
            });
        });
    };

    // sets the initial state of the weather block
    useEffect(() => {
        data(query).then(res => {
            console.log(res);
            setWeather({
                temp: res.main.temp,
                city: res.name,
                condition: res.weather[0].main,
                country: res.country
            });
        });
        // eslint-disable-next-line
    }, []);

    return (
        <AppWrapper>
            <WeatherCard
                temp={cToF(weather.temp).toFixed(0)}
                condition={weather.condition}
                city={weather.city}
                country={weather.country}
            />
            <form>
                <input
                    value={ query }
                    onChange={ e => setQuery(e.target.value) }
                />
                <button onClick={ e => handleSearch(e) }>Search</button>
            </form>
        </AppWrapper>
    );
}

export default App;
