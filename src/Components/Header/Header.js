import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Link} from 'react-router-dom';
import ThemeSwitcher from '../../common/ThemeSwitcher/ThemeSwitcher';
import {darkTheme, lightTheme} from "../../theme/theme";


const Header = (props) => {
	const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    height: 10vh;
	background-color: ${props => props.theme.bgColor};
	color: ${props => props.theme.textColor};
	border-bottom: 1px solid ${props => props.theme.textColor};
	    &h1 {
	        margin: 0;
	    } 
	`;
	const StyledLink = styled(Link)`
        margin: 0;
        text-decoration: none;
        font-size: 2.5em;
        font-weight: 900;
        color: ${props => props.theme.textColor};
    `;

	return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
		<Header>
			<StyledLink to='/'>Star Wars Wiki</StyledLink>
			<ThemeSwitcher setTheme={props.setTheme} theme={props.theme}/>
		</Header>
	</ThemeProvider>;
};

export default Header;
