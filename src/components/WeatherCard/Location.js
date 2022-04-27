import React, { useState } from "react";
import styled from "@emotion/styled";

const Location = ({ city, country, getWeather }) => {
    const [query, setQuery] = useState(""); 
    const [inputMode, setInputMode] = useState(false);
    return (
        <Container>
            {!inputMode &&
            <City onClick={() => setInputMode(true)}>{city}</City>
            }
            {inputMode &&
            <div className="formWrapper">
                <form onSubmit={e => {
                    e.preventDefault();
                    getWeather(query);
                }}>
                    <p className="city-input">
                        <input
                            className="city-input"
                            required
                            placeholder="City Name"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </p>
                    <p className="city-input-controls">
                        <button type="submit">Search</button>&nbsp;
                        <button onClick={() => setInputMode(false)}>Cancel</button>
                    </p>
                </form>
            </div>
            }
            <Country>{country}</Country>
        </Container>
    );
}
 
export default Location;

const Container = styled.div`
    text-align: center;
    margin: 20px auto 0;
`;
const City = styled.h1`
    font-family: Merriweather, sans-serif;
    font-size: 1.6rem;
    cursor: pointer;
    position: relative;
    &:hover {
        top: -3px;
    }
`;
const Country = styled.h3`
    font-family: sans-serif;
    font-size: 1.1rem;
`;