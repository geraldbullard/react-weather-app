import React from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";

const Condition = ({ temp, condition }) => {
    const reelStyle = {
        reel: {
            height: "1.07em",
            display: "flex",
            alignItems: "flex-end",
            overflowY: "hidden",
            lineHeight: "0.95em",
            justifyContent: "center",
        },
        group: {
            transitionDelay: "0",
            transitionTimingFunction: "ease-in-out",
            transform: "translate(0, 0)",
            height: "1.5em",
        },
        number: {
            height: "1em",
        },
    };
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
            <div className="tempWrapper">
                <Reel theme={reelStyle} text={`${temp}° F`} />
            </div>
            <State>{condition}</State>
        </>
    );
}
 
export default Condition;