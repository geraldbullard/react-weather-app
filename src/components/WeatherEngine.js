import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { cToF } from './WeatherCard/utils';

import WeatherCard from './WeatherCard/component';

const AppWrapper = styled.div`
    margin: 10px auto;
    color: white;
`;

const WeatherEngine = ({ location }) => {
    // A default state
    const [query, setQuery] = useState(""); 
    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(false); 
    // The weather object
    const [weather, setWeather] = useState({
        temp: null,
        city: null,
        country: null,
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
                country: resJSON.country
            });
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    // Handle when user clicks "Search" button
    const handleSearch = (e) => { 
        e.preventDefault();
        getWeather(query);
    };

    // sets the initial state of the weather block
    useEffect(() => {
        getWeather(location);
        // eslint-disable-next-line
    }, [location]);

    return (
        <AppWrapper>
            {!loading && !error ? ( // Done loading and no errors
            <>
                <WeatherCard
                    temp={cToF(weather.temp).toFixed(0)}
                    condition={weather.condition}
                    city={weather.city}
                    country={weather.country}
                />
                <div className="formWrapper">
                    <form>
                        <input
                            
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                            <button onClick={e => handleSearch(e)}>Search</button>
                    </form>
                </div>
            </>
            ) : loading && !error ? ( // Loading with no errors
            <>
                <div className="loadingWrapper">
                    Loading...
                </div>
            </>
            ) : !loading && error ? ( // Done loading and has error
            <>
                <div className="errorWrapper">
                    ERROR!
                </div>
            </>
            ) : ( // show nothing
                null
            )}
        </AppWrapper>
    );
}

export default WeatherEngine;