import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {

    const Icon = styled.img`
        width: 30%;
        height: auto;
    `;

    return (
        <Icon className="icon" src="./img/mostly-cloudy.png" alt="Weather Icon" />
    );
}
 
export default Icon;