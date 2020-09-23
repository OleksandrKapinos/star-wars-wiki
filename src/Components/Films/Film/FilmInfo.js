import React from "react";
import getIdFromUrl from "../../../common/getIdFromUrl/getIdFromUrl";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../../theme/theme";
import {DetailBox, FilmImage, StyledHeader, StyledTextItem} from "./FilmInfo.styles";

const FilmInfo = ({item, theme}) => {
    const imageSrc = item.url && `https://starwars-visualguide.com/assets/img/films/${getIdFromUrl(item.url)}.jpg`;

    return <ThemeProvider theme={theme === 'theme-light' ? lightTheme : darkTheme}>
        {imageSrc && <FilmImage src={imageSrc} alt={item.name}/>}
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
