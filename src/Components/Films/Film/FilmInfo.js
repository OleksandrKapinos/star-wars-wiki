import React from "react";
import getIdFromUrl from "../../../common/getIdFromUrl/getIdFromUrl";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../../theme/theme";

const FilmInfo = ({item, theme}) => {

    const FilmImage = styled.img`
        justify-self: right;
        width: 300px;
        margin: 30px;
        border-radius: 20px;
    `;
    const DetailBox = styled.div`
        margin-top: 30px;
    `;
    const StyledTextItem = styled.div`
        display: block;
        padding-bottom: 20px;
        text-transform: uppercase;
        font-size: 20px;
    
    `;
    const StyledHeader = styled(StyledTextItem)`
        font-size: 30px;
        padding-bottom: 30px;
    `;

    return <ThemeProvider theme={theme === 'theme-light' ? lightTheme : darkTheme}>
        <FilmImage
            src={`https://starwars-visualguide.com/assets/img/films/${getIdFromUrl(item.url)}.jpg`}
            alt={item.name}/>
        <DetailBox>
            <StyledHeader>{item.title}</StyledHeader>
            <StyledTextItem>director - {item.director}</StyledTextItem>
            <StyledTextItem>producer - {item.producer}</StyledTextItem>
            <StyledTextItem>release data - {item.release_date}</StyledTextItem>
            <StyledTextItem>description: {item.opening_crawl}</StyledTextItem>
        </DetailBox>
    </ThemeProvider>
};

export default FilmInfo;
