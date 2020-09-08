import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../theme/theme";

const PageNumberBar = (props) => {

    const PageNumberBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
        width: 450px;
        margin: 0 auto;
        padding-bottom: 30px;
    `;

    const StyledButton = styled.button`
        padding: 10px 20px;
        width: 220px;
        font-size: 20px;
        color: ${props => props.theme.bgColor};
        border: 1px solid ${props => props.theme.textColor};
        border-radius: 13px;
        background-color: ${props => props.theme.textColor};
        cursor: pointer; 
        &:hover {
            background-color: ${props => props.theme.bgColor};
            color: ${props => props.theme.textColor};
        }
        &:disabled {
        background-color: #757575;
        }
    `;


    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <PageNumberBarWrapper>
            <StyledButton onClick={props.showPreviousPage} disabled={!props.availablePage.previous}
            >Previous</StyledButton>
            <StyledButton onClick={props.showNextPage} disabled={!props.availablePage.next}
            >Next</StyledButton>
        </PageNumberBarWrapper>
    </ThemeProvider>;
};

export default PageNumberBar;
