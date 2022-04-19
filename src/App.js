import React from 'react';
import styled from '@emotion/styled';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

const AppWrapper = styled.div`
    margin: 10px auto;
    color: white;
`;

function App() {
    const data = async () => {
        const apiRes = await fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=160144a9bdc82bd3c476d76c63eda415"
        );
        const resJSON = await apiRes.json();
        return resJSON;
    }
    data().then(res => { 
        console.log(res.main.temp);
    });

    return (
        <AppWrapper>
            <WeatherCard temp={-13} condition="Clear" city="Austin" country="US" />
            <WeatherCard temp={11} condition="Rainy" city="Sydney" country="AU" />
            <WeatherCard temp={23} condition="Thunderstorm" city="London" country="UK" />
        </AppWrapper>
    );
}

export default App;
