import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const NavBarWrapper = styled.div`
        position: absolute;
         top: 0;
        left: 0;
        width: 15vw;
        height: 10vh;
       background-color: ${props => props.theme.bgColor};
       z-index: 2;
       border-bottom: 1px solid ${props => props.theme.textColor};
    `;

export const NavBarButton = styled.div`
        margin: calc((10vh - 42px)/2);
        width: 42px;
        color: ${props => props.theme.textColor};
        cursor: pointer;

    `;

export const MenuSvg = styled.svg`
    fill: ${props => props.theme.textColor};
    `;

export const NavBarBlock = styled.div`
        display: grid;
        width: 300px;
        grid-template-columns: 1fr;
               background-color: ${props => props.theme.bgColor};
        
    `;

export const StyledNavLink = styled(NavLink)`
display: flex;
justify-content: center;
        padding: 15px 10px;
        text-decoration: none;
        color: ${props => props.theme.textColor};
        font-size: 20px;
        border-bottom: 1px solid ${props => props.theme.textColor};
        &:hover {
            background-color: ${props => props.theme.textColor};
            color: ${props => props.theme.bgColor};
        }
    `;
