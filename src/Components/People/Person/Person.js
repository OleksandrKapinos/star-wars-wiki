import React, {useCallback, useEffect, useState} from 'react';
import {peopleAPI} from '../../../api/api';
import LoadingSpinner from '../../../common/LoadingSpinner/LoadingSpinner';
import PersonInfo from "./PersonInfo";
import {withRouter} from "react-router-dom";
import PersonFilms from "./PersonFilms";
import BackButton from "../../../common/BackButton/BackButton";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../../theme/theme";

const Person = (props) => {
    const [personInfo, setPersonInfo] = useState([]);
    const [filmsLink, setFilmsLink] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        peopleAPI.getCurrentPerson(props.match.params.id)
            .then(result => {
                let {films, ...personInfo} = result;
                setPersonInfo(personInfo);
                setFilmsLink(films);
                setIsLoading(false);
            });
    }, [setPersonInfo, setFilmsLink, setIsLoading]);


    const toItem = useCallback(item => <PersonFilms filmUrl={item} key={item} theme={props.theme}/>);
    const filmList = filmsLink.map(toItem);


    const PersonStyleWrapper = styled.div`
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

    const PersonBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;
    padding: 20px;
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 13px;
    background-color: ${props => props.theme.opacityBgColor};
`;

    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <PersonStyleWrapper>
        <BackButton theme={props.theme}/>
        {
            isLoading
                ? <LoadingSpinner theme={props.theme}/>
                : <PersonBox>
                    <PersonInfo item={personInfo} theme={props.theme}/>
                </PersonBox>
        }
            <PersonBox>
                {filmList}
            </PersonBox>
        </PersonStyleWrapper>
    </ThemeProvider>;
};


export default withRouter(Person);
