import React, {useState} from 'react';
import {MenuSvg, NavBarBlock, NavBarButton, NavBarWrapper, StyledNavLink} from "./NavBar.styles";
import {darkTheme, lightTheme} from "../../theme/theme";
import {ThemeProvider} from "styled-components";

const NavBar = (props) => {
    const [isShow, setIsShow] = useState(false);
    const toggleNavBar = () => setIsShow(!isShow);


    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <NavBarWrapper>
            <NavBarButton onClick={toggleNavBar}>
                <MenuSvg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 18 18">
                    <path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z"/>
                </MenuSvg>
            </NavBarButton>
            {isShow &&
            <NavBarBlock isShow>

                <StyledNavLink onClick={toggleNavBar} to={'/people'}>People</StyledNavLink>

                <StyledNavLink onClick={toggleNavBar} to={'/films'}>Films</StyledNavLink>

            </NavBarBlock>
            }
        </NavBarWrapper>
    </ThemeProvider>;
};


export default NavBar;
