import styled from 'styled-components';

export const PersonImage = styled.img`
        justify-self: right;
        width: 300px;
        margin: 30px;
        border-radius: 20px;
        @media (max-width: 1000px){ 
            justify-self: center;
            width: 200px;
            margin: 20px 0 0 0;
        }
        
    `;

export const DetailBox = styled.div`
        width: 300px;
        margin-top: 30px;
        @media (max-width: 1000px){ 
            margin: 20px;
            width: 200px;
        }  
    `;

export const StyledTextItem = styled.div`
        display: block;
        width: 300px;
        padding-bottom: 20px;
        text-transform: uppercase;
        font-size: 20px;
        @media (max-width: 1000px){ 
            width: 250px;
        }  
    
    `;

export const StyledHeader = styled(StyledTextItem)`
        font-size: 30px;
        padding-bottom: 30px;
    `;
