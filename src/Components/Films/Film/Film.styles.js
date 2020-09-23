import React, {useCallback, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {filmAPI} from "../../../api/api";
import LoadingSpinner from "../../../common/LoadingSpinner/LoadingSpinner";
import FilmInfo from "./FilmInfo";
import FilmCharacter from "./FilmCharacter";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../../theme/theme";
import BackButton from "../../../common/BackButton/BackButton";

const Film = (props) => {
    const [filmInfo, setFilmInfo] = useState([]);
    const [peopleLink, setPeopleLink] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        filmAPI.getCurrentFilm(props.match.params.id)
            .then(result => {
                let {characters, ...filmInfo} = result;
                setFilmInfo(filmInfo);
                setPeopleLink(characters);
                setIsLoading(false);
            });
    }, [setFilmInfo, setPeopleLink, setIsLoading]);


    const characterList = peopleLink.map(item => <FilmCharacter personUrl={item} key={item} theme={props.theme}/>);


    const FilmsStyleWrapper = styled.div`
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

    const FilmBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;
    padding: 20px;
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 13px;
    background-color: ${props => props.theme.opacityBgColor};
    @media (max-width: 1000px){ 
            grid-template-columns: 1fr;
            padding: 10px 0;
    }
`;

    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <FilmsStyleWrapper>
            <BackButton theme={props.theme}/>
            {
                isLoading
                    ? <LoadingSpinner theme={props.theme}/>
                    : <FilmBox>
                        <FilmInfo item={filmInfo}/>
                    </FilmBox>
            }
            <FilmBox>
                {characterList}
            </FilmBox>
        </FilmsStyleWrapper>
    </ThemeProvider>;
};

export default withRouter(Film);

