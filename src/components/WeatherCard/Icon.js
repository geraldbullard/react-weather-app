import React from "react";
import styled from "@emotion/styled";

const Icon = ({ condition }) => {

    const Icon = styled.img`
        width: 30%;
        height: auto;
    `;

    var icon = '';
    switch (condition) {
        case 'Clear':
            icon = './img/sunny.png';
            break;
        case 'Cloudy':
            icon = './img/cloudy.png';
            break;
        case 'Partly Cloudy':
            icon = './img/other_cloudy.png';
            break;
        case 'Rainy':
            icon = './img/rainy.png';
            break;
        case 'Sunny':
            icon = './img/sunny.png';
            break;
        case 'Thunderstorm':
            icon = './img/thunderstorm.png';
            break;
        case 'Windy':
            icon = './img/windy.png';
            break;
        default:
            break;
    }

    return (
        <Icon
            src={icon}
            alt="Weather Icon"
        />
    );
}
 
export default Icon;