import styled from 'styled-components';

export const PeopleStyleWrapper = styled.div`
position: absolute;
top: 10vh;
left: 0;
bottom: 0;
right: 0;
height: 100%;
background-repeat: no-repeat; 
  background-size: cover;
  background-image: url("${props => props.theme.bgImage}");
`;

