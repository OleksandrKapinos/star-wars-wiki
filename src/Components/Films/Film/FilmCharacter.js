import React, {useEffect, useState} from 'react';
import {peopleAPI} from "../../../api/api";
import {Link} from "react-router-dom";
import getIdFromUrl from "../../../common/getIdFromUrl/getIdFromUrl";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../../theme/theme";

const FilmCharacter = (props) => {
    const [personInfo, setPersonInfo] = useState({});
    const id = getIdFromUrl(props.personUrl);


    useEffect(() => {
        peopleAPI.getCurrentPerson(id)
            .then(result => {
                setPersonInfo(result)});
    }, [props.personUrl, setPersonInfo]);


    const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    margin: 15px auto 15px auto;
    width: 450px;
    padding: 10px;
    font-weight: 900;
    cursor: pointer;
    color: ${props => props.theme.textColor};
    text-decoration: none;
    font-size: 20px;
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 13px;
    background-color: ${props => props.theme.bgColor};
        &:hover {
            background-color: ${props => props.theme.textColor};
            color: ${props => props.theme.bgColor};
	  }
`;


    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <StyledLink to={`/people/${id}`}>
            {personInfo.name}
        </StyledLink>
    </ThemeProvider>
};

export default FilmCharacter;
