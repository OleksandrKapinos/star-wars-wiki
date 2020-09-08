import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "../../theme/theme";


const ThemeSwitcher = (props) => {

	const switchTheme = () => {
		props.theme === 'theme-dark' ?
			props.setTheme('theme-light') :
			props.setTheme('theme-dark');
	};

	const StyledButton = styled.button`
		margin: 22px;
        padding: 10px;
        font-size: 20px;
        z-index: 3;
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
		<StyledButton type="checkbox" onClick={switchTheme}> Switch theme </StyledButton>
	</ThemeProvider>;
};




export default ThemeSwitcher;
