import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from '../../theme/theme';


const SearchBar = (props) => {

	const SearchBarWrapper = styled.div`
	display: flex;
    justify-content: center;
    color: ${props => props.theme.textColor};
    padding: 30px;
	`;

	const SearchBox = styled.div`
	display: grid;
    grid-template-columns: 1fr 24px;
    padding: 0 8px;
     width: 450px;
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 30px;
    height: 36px;
    background-color: ${props => props.theme.bgColor};
	`;

	const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 15px;
    outline: none;
    -webkit-appearance: none;
    border: none;
    font-size: 24px;
    font-weight: 900;
    background-color: inherit;
    color: ${props => props.theme.textColor};
	border-radius: 30px;
    align-self: center;
    justify-self: center;
	&::placeholder {
	background-color: inherit;
    color: ${props => props.theme.textColor};
    font-weight: 100;
	}
`;

	const StyledButton = styled.button`
	display: flex;
    fill: ${props => props.theme.textColor};
    margin-top: 6px;
	 background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
	`;

	return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
		<SearchBarWrapper>
			<SearchBox>
				<StyledInput type="text" value={props.searchValue} onChange={props.filterOnChange}
					placeholder={props.placeholder}/>
				<StyledButton onClick={props.cleanSearchValue}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						viewBox="0 0 48 48" data-ember-extension="1">
						<path d="M38 12.83L35.17 10 24 21.17 12.83 10
                    10 12.83 21.17 24 10 35.17 12.83 38 24 26.83
                    35.17 38 38 35.17 26.83 24z"/>
					</svg>
				</StyledButton>
			</SearchBox>
		</SearchBarWrapper>
	</ThemeProvider>;
};

export default SearchBar;
