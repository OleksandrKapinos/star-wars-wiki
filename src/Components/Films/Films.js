import React, {useCallback, useEffect, useState} from 'react';
import {filmAPI} from "../../api/api";
import ListsItem from "../ListsItem/ListsItem";
import getIdFromUrl from "../../common/getIdFromUrl/getIdFromUrl";
import {darkTheme, lightTheme} from "../../theme/theme";
import styled, {ThemeProvider} from "styled-components";

const Films = (props) => {
    const [films, setFilms] = useState([]);


    useEffect(() => {
        filmAPI.getFilms()
            .then(result => setFilms(result.results))
    }, [setFilms]);


    const toItem = useCallback(item => <ListsItem name={item.title} id={getIdFromUrl(item.url)}
                                                           key={item.title} theme={props.theme}/>);
    const filmLinksList = films.map(toItem);


    const FilmsStyleWrapper = styled.div`
    position: absolute;
    top: 10vh;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    padding: 30px;
    background-repeat: no-repeat; 
    background-size: cover;
    background-image: url("${props => props.theme.bgImage}");
`;


    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <FilmsStyleWrapper>
            {filmLinksList}
        </FilmsStyleWrapper>
    </ThemeProvider>
};

export default Films;
