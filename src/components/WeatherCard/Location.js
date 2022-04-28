import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Location = ({ city, getWeather }) => {
    const [query, setQuery] = useState(""); 
    const [inputCityMode, setInputCityMode] = useState(false);
    const inputCityRef = useRef("");
    // Another way to focus not in videos
    // const [inputCityFocusState, setInputCityFocusState] = useState(false);

    // Handle the "Esc" key being pressed while the city input is visible to hide it
    const handleEsc = (event) => {
        if (event.keyCode === 27)
            if (inputCityMode) setInputCityMode(false);
    };

    useEffect(() => {
        if (inputCityMode) {
            inputCityRef.current.focus();
        }
    }, [inputCityMode]);
    
    if (inputCityMode) {
        return (
            <Container>
                <div className="formWrapper">
                    <motion.div initial={{opacity:0}} animate={{opacity:1}}>
                        <FormElement onSubmit={e => {
                            e.preventDefault();
                            getWeather(query);
                        }}>
                            <p className="city-input">
                                <InputField
                                    className="city-input"
                                    id="city_input"
                                    required
                                    ref={inputCityRef}
                                    /*autoFocus={inputCityFocusState}*/ // Another way to focus not in videos
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    onKeyDown={handleEsc}
                                />
                            </p>
                            <p className="city-input-controls">
                                <SearchButton type="submit">Search</SearchButton>
                                <CancelButton onClick={() => setInputCityMode(false)}>X</CancelButton>
                            </p>
                        </FormElement>
                    </motion.div>
                </div>
            </Container>
        );
    }
    
    return (
        <Container>
            <City onClick={() => {
                setInputCityMode(true);
                /*setInputCityFocusState(true);*/ // Another way to focus not in videos
            }}>{city}</City>
        </Container>
    );
}
 
export default Location;

const FormElement = styled.form`
    display: flex;
    position: relative;
    background-color: #46618b;
    border-radius: 5px;
    margin-left: -5px;
`;
const InputField = styled.input`
    padding: 6px;
    width: 90px;
    background: transparent;
    border: none;
        color: white;
    &:focus {
        outline: 0;
    }
`;
const SearchButton = styled.button`
    background: #394e70;
    color: white;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 6px;
    cursor: pointer;
`;
const CancelButton = styled.span`
    position: absolute;
    top: -8px;
    right: -13px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #557fc2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    box-shadow: 2px 1px 3px rgb(0,0,0, 0.4);
`;
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