import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {filmAPI} from "../../../api/api";
import LoadingSpinner from "../../../common/LoadingSpinner/LoadingSpinner";
import FilmInfo from "./FilmInfo";
import FilmCharacter from "./FilmCharacter";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../../theme/theme";
import BackButton from "../../../common/BackButton/BackButton";
import {FilmBox, FilmsStyleWrapper, FilmCharactersBox} from "./Film.styles";

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
    }, [props.match.params.id, setFilmInfo, setPeopleLink, setIsLoading]);


    const characterList = peopleLink.map(item => <FilmCharacter personUrl={item} key={item} theme={props.theme}/>);


    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <FilmsStyleWrapper>
            <BackButton theme={props.theme}/>
            {
                isLoading
                    ? <LoadingSpinner theme={props.theme}/>
                    : <>
                        <FilmBox>
                            <FilmInfo item={filmInfo}/>
                        </FilmBox>
                        <FilmCharactersBox>
                            {characterList}
                        </FilmCharactersBox>
                    </>
            }
        </FilmsStyleWrapper>
    </ThemeProvider>;
};

export default withRouter(Film);

