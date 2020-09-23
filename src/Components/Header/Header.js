import React from 'react';
import {ThemeProvider} from 'styled-components';
import ThemeSwitcher from '../../common/ThemeSwitcher/ThemeSwitcher';
import {darkTheme, lightTheme} from "../../theme/theme";
import {HeaderBox, StyledLink, Background} from "./Header.styles";


const Header = (props) => {

	return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
		<HeaderBox>
			<StyledLink to='/'>Star Wars Wiki</StyledLink>
			<ThemeSwitcher setTheme={props.setTheme} theme={props.theme}/>
		</HeaderBox>
		<Background/>
	</ThemeProvider>;
};

export default Header;
