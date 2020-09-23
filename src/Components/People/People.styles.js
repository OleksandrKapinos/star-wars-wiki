import styled from 'styled-components';

export const PeopleStyleWrapper = styled.div`
        position: absolute;
        top: 10vh;
        left: 0;
        bottom: 0;
        right: 0;
        @media (max-width: 1000px){ 
            position: relative;
            top: 0; 
            min-height: 90vh;
         }
`;
