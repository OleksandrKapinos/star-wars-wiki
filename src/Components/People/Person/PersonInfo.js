import React from "react";
import getIdFromUrl from "../../../common/getIdFromUrl/getIdFromUrl";
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "../../../theme/theme";

const PersonInfo = ({item, theme}) => {

    const PersonImage = styled.img`
        justify-self: right;
        width: 300px;
        margin: 30px;
        border-radius: 20px;
    `;
    const DetailBox = styled.div`
        width: 300px;
        margin-top: 30px;
    `;
    const StyledTextItem = styled.div`
        display: block;
        width: 300px;
        padding-bottom: 20px;
        text-transform: uppercase;
        font-size: 20px;
    
    `;
    const StyledHeader = styled(StyledTextItem)`
        font-size: 30px;
        padding-bottom: 30px;
    `;

    return <ThemeProvider theme={theme === 'theme-light' ? lightTheme : darkTheme}>
                <PersonImage
                    src={item.url && `https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(item.url)}.jpg`}
                    alt={item.name}/>
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
