import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {

    const Temp = styled.h1`        
        font-family: sans-serif;
        font-size: 2.0rem;
        font-weight: 200;
    `;

    const State = styled.h3`
        font-family: sans-serif;
        font-size: 1.1rem;
    `;

    return (
        <>
            <Temp>20 °C</Temp>
            <State>Thunderstorm</State>
        </>
    );
}
 
export default Condition;