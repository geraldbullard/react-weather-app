import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {

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
            <Temp>{temp} °C</Temp>
            <State>{condition}</State>
        </>
    );
}
 
export default Condition;