import React, {useEffect, useState} from 'react';
import {filmAPI} from "../../../api/api";
import getIdFromUrl from "../../../common/getIdFromUrl/getIdFromUrl";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../../theme/theme";
import {StyledLink} from "./PersonFilms.styles";

const PersonFilms = (props) => {
    const [filmInfo, setFilmInfo] = useState({});
    const [id] = useState(getIdFromUrl(props.filmUrl));


    useEffect(() => {
        filmAPI.getCurrentFilm(id)
            .then(result => setFilmInfo(result));
    }, [id, setFilmInfo]);


    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <StyledLink to={`/films/${id}`}>
            {filmInfo.title}
        </StyledLink>
    </ThemeProvider>
};

export default PersonFilms;
