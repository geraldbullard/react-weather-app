import React from 'react';
import styled from '@emotion/styled';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

const AppWrapper = styled.div`
    margin: 10px auto;
    color: white;
`;

function App() {
    return (
        <AppWrapper>
            <WeatherCard temp={-13} condition="Clear" city="Austin" country="US" />
            <WeatherCard temp={11} condition="Rainy" city="Sydney" country="AU" />
            <WeatherCard temp={23} condition="Thunderstorm" city="London" country="UK" />
        </AppWrapper>
    );
}

export default App;
