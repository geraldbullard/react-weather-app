import React from "react";
import styled from "@emotion/styled";

const Location = (props) => {
    const Container = styled.div`
        text-align: center;
        margin: 20px auto 0;
    `;

    const City = styled.h1`
        font-family: Merriweather, sans-serif;
        font-size: 1.6rem;
    `;

    const Country = styled.h3`
        font-family: sans-serif;
        font-size: 1.1rem;
    `;

    return (
        <Container>
            <City>Sydney</City>
            <Country>AU</Country>
        </Container>
    );
}
 
export default Location;