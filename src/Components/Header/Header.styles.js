import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderBox = styled.div`
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

export const StyledLink = styled(Link)`
        margin: 0;
        text-decoration: none;
        font-size: 2.5em;
        font-weight: 900;
        color: ${props => props.theme.textColor};
         @media (max-width: 1000px){ 
            margin: 0 20px 0 60px;
			font-size: 1.5em;
			font-weight: 700;
        }
        
    `;

export const Background = styled.div`
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: -1;
        background-repeat: no-repeat; 
        background-size: cover;
        background-image: url("${props => props.theme.bgImage}"); 
`;
