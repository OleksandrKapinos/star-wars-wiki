import React, {useEffect, useState} from 'react';
import {peopleAPI} from '../../../api/api';
import LoadingSpinner from '../../../common/LoadingSpinner/LoadingSpinner';
import PersonInfo from "./PersonInfo";
import {withRouter} from "react-router-dom";
import PersonFilms from "./PersonFilms";
import BackButton from "../../../common/BackButton/BackButton";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../../theme/theme";
import {PersonBox, PersonStyleWrapper} from "./Person.styles";

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
    }, [props.match.params.id, setPersonInfo, setFilmsLink, setIsLoading]);


    const filmList = filmsLink.map(item => <PersonFilms filmUrl={item} key={item} theme={props.theme}/>);


    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <PersonStyleWrapper>
            <BackButton theme={props.theme}/>
            {
                isLoading
                    ? <LoadingSpinner theme={props.theme}/>
                    : <>
                        <PersonBox>
                            <PersonInfo item={personInfo} theme={props.theme}/>
                        </PersonBox>
                        <PersonBox>
                            {filmList}
                        </PersonBox>
                    </>
            }
        </PersonStyleWrapper>
    </ThemeProvider>;
};


export default withRouter(Person);
