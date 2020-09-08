import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {withRouter} from "react-router-dom";
import {darkTheme, lightTheme} from "../../theme/theme";

const BackButton = (props) => {

    const StyledButton = styled.button`
    width: 150px;
        padding: 10px;
        margin-bottom: 30px;
        font-size: 20px;
        color: ${props => props.theme.textColor};
        border: 1px solid ${props => props.theme.textColor};
        border-radius: 13px;
        background-color: ${props => props.theme.bgColor};
        &:hover {
            background-color: ${props => props.theme.textColor};
            color: ${props => props.theme.bgColor};
        }
    `;

    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <StyledButton onClick={props.history.goBack}>Back</StyledButton>
    </ThemeProvider>
};

export default withRouter(BackButton);
