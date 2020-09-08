import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "../../theme/theme";

const StyledLink = styled(Link)`
display: flex;
  justify-content: center;
margin: 0 auto 30px auto;
width: 450px;
        padding: 10px;
font-weight: 900;
  cursor: pointer;
  color: ${props => props.theme.textColor};
  text-decoration: none;
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

const ListsItem = ({name, id, match, theme}) => {


    return <ThemeProvider theme={theme === 'theme-light' ? lightTheme : darkTheme}>
        <StyledLink to={match.url + `/${id}`}>
            {name}
        </StyledLink>
    </ThemeProvider>
};

export default withRouter(ListsItem);
