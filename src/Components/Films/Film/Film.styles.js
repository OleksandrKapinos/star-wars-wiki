import styled from "styled-components";

export const FilmsStyleWrapper = styled.div`
    top: 10vh;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 30px;
`;

    export const FilmBox = styled.div`
    display: grid;
    grid-template-columns: 400px 1fr;
    margin-bottom: 30px;
    padding: 20px;
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 13px;
    background-color: ${props => props.theme.opacityBgColor};
    @media (max-width: 1000px){ 
            grid-template-columns: 1fr;
            padding: 10px 0;
    }
`;

export const FilmCharactersBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;
    padding: 20px;
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 13px;
    background-color: ${props => props.theme.opacityBgColor};
    @media (max-width: 1000px){ 
            grid-template-columns: 1fr;
            padding: 10px 0;
    }
`;
