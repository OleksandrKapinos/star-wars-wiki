import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "../../theme/theme";


const LoadingSpinner = (props) => {
    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <LoaderWrapper>
            <Loader></Loader>
        </LoaderWrapper>
    </ThemeProvider>
};

const LoaderWrapper = styled.div`
    height: 90vh;
    `;

const Loader = styled.div`display: inline-block;
    display: block;
    margin: 100px auto 0 auto;
    width: 200px;
    height: 200px;
    &:after {
    content: " ";
    display: block;
    width: 128px;
    height: 128px;
    margin: 16px;
    border-radius: 50%;
    border: 12px solid ${props => props.theme.textColor};
    border-color: ${props => props.theme.textColor} transparent ${props => props.theme.textColor} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    @keyframes lds-dual-ring {
        0% {
        transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
`;

export default LoadingSpinner;
