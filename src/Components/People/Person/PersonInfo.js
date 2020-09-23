import React from "react";
import getIdFromUrl from "../../../common/getIdFromUrl/getIdFromUrl";
import {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "../../../theme/theme";
import {DetailBox, PersonImage, StyledHeader, StyledTextItem} from "./PersonInfo.styles";

const PersonInfo = ({item, theme}) => {
    const imageSrc = item.url && `https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(item.url)}.jpg`;

    return <ThemeProvider theme={theme === 'theme-light' ? lightTheme : darkTheme}>
        {imageSrc && <PersonImage src={imageSrc} alt={item.name}/>}
        <DetailBox>
            <StyledHeader>{item.name}</StyledHeader>
            <StyledTextItem>height - {item.height}</StyledTextItem>
            <StyledTextItem>mass - {item.mass}</StyledTextItem>
            <StyledTextItem>hair color - {item.hair_color}</StyledTextItem>
            <StyledTextItem>skin color - {item.skin_color}</StyledTextItem>
            <StyledTextItem>eye color - {item.eye_color}</StyledTextItem>
            <StyledTextItem>birth year - {item.birth_year}</StyledTextItem>
            <StyledTextItem>gender - {item.gender}</StyledTextItem>
        </DetailBox>
    </ThemeProvider>
};

export default PersonInfo;
