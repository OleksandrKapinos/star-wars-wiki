import {Link} from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    margin: 15px auto 15px auto;
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
	@media (max-width: 1000px){ 
            width: 200px;
        }    
`;
