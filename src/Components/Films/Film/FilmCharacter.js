import React, {useEffect, useState} from 'react';
import {peopleAPI} from "../../../api/api";
import getIdFromUrl from "../../../common/getIdFromUrl/getIdFromUrl";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../../theme/theme";
import {StyledLink} from "./FilmCharacter.styles";

const FilmCharacter = (props) => {
    const [personInfo, setPersonInfo] = useState({});
    const [id] = useState(getIdFromUrl(props.personUrl));

    useEffect(() => {
        peopleAPI.getCurrentPerson(id)
            .then(result => {
                setPersonInfo(result)});
    }, [id, setPersonInfo]);


    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <StyledLink to={`/people/${id}`}>
            {personInfo.name}
        </StyledLink>
    </ThemeProvider>
};

export default FilmCharacter;
