import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { cToF } from './WeatherCard/utils';

import WeatherCard from './WeatherCard/component';
import { PulseLoader } from 'react-spinners';

const AppWrapper = styled.div`
    margin: 10px auto;
    color: white;
`;

const WeatherEngine = ({ location }) => {
    // Default states
    // eslint-disable-next-line
    const [query, setQuery] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    // The weather object
    const [weather, setWeather] = useState({
        temp: null,
        city: null,
        condition: null
    });

    // Make the API call to get the weather object
    const getWeather = async q => {
        setQuery("");
        setLoading(true);
        try {
            const apiRes = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=160144a9bdc82bd3c476d76c63eda415`
            );
            const resJSON = await apiRes.json();
            setWeather({
                temp: resJSON.main.temp,
                city: resJSON.name,
                condition: resJSON.weather[0].main,
            });
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    // sets the initial state of the weather block
    useEffect(() => {
        getWeather(location);
    }, [location]);

    if (error) {
        return ( // Has error
            <AppWrapper>
                <div className="errorWrapper">
                    <p>No match for that city!</p>
                    <p><button onClick={() => setError(false)}>Try Again</button></p>
                </div>
            </AppWrapper>
        );
    }

    if (loading) {
        return ( // Loading Pulse Icon
            <AppWrapper>
                <div className="loadingWrapper">
                    <PulseLoader size={15} color="purple" />
                </div>
            </AppWrapper>
        );
    }

    return (
        <AppWrapper>
            <WeatherCard
                temp={cToF(weather.temp).toFixed(0)}
                condition={weather.condition}
                city={weather.city}
                getWeather={getWeather}
            />
        </AppWrapper>
    );
}

export default WeatherEngine;