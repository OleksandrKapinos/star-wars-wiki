import React from 'react';
import {withRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "../../theme/theme";
import {StyledLink} from "./ListsItem.styles";


const ListsItem = ({name, id, match, theme}) => {


    return <ThemeProvider theme={theme === 'theme-light' ? lightTheme : darkTheme}>
        <StyledLink to={match.url + `/${id}`}>
            {name}
        </StyledLink>
    </ThemeProvider>
};

export default withRouter(ListsItem);
