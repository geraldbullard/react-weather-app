import React from "react";
import styled from '@emotion/styled';

import Location from "./Location";
import Condition from "./Condition";
import Icon from "./Icon";

const WeatherCard = ({ temp, condition, city, country }) => { // Deconstruction method for properties from the object
    
    // Set high and low temps color
    let highColor = 0;
    let lowColor = 0;
    let bg = null;
    if (temp > 10) { // Hot weather
        highColor = (1 - (temp - 12) / 28) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(
            to top,
            rgb(255, ${highColor}, 0), 
            rgb(255, ${lowColor}, 0)
        )`;
    } else if (temp <= 10) { // Cold weather
        highColor = (1 - (temp + 20) / 32) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(
            to top,
            rgb(0, ${highColor}, 255), 
            rgb(0, ${lowColor}, 255)
        )`;
    }

    const Card = styled.div`
        margin: 0 auto;
        background: ${bg};
        width: 200px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 15px;
        align-items: center;
    `;

    return (
        <Card>
            <Location city={city} country={country} />
            <Icon condition={condition} />
            <Condition temp={temp} condition={condition} />
        </Card>
    );
}
 
export default WeatherCard;