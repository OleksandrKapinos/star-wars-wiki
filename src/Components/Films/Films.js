import React, {useEffect, useState} from 'react';
import {filmAPI} from "../../api/api";
import ListsItem from "../ListsItem/ListsItem";
import getIdFromUrl from "../../common/getIdFromUrl/getIdFromUrl";
import {darkTheme, lightTheme} from "../../theme/theme";
import {ThemeProvider} from "styled-components";
import {FilmsStyleWrapper} from "./Films.styles";

const Films = (props) => {
    const [films, setFilms] = useState([]);


    useEffect(() => {
        filmAPI.getFilms()
            .then(result => setFilms(result.results))
    }, [setFilms]);


    const filmLinksList = films.map(item => (
        <ListsItem name={item.title} id={getIdFromUrl(item.url)} key={item.title} theme={props.theme}/>));


    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <FilmsStyleWrapper>
            {filmLinksList}
        </FilmsStyleWrapper>
    </ThemeProvider>
};

export default Films;
