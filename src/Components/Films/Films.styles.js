import styled from "styled-components";

export const FilmsStyleWrapper = styled.div`
    position: absolute;
    top: 10vh;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 15px;
    @media (max-width: 1000px){ 
            position: relative;
            top: 0; 
            height: 90vh;
         }
`;

