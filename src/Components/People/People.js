import React, {useCallback, useEffect, useState} from 'react';
import {peopleAPI} from '../../api/api';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import SearchBar from '../../common/SearchBar/SearchBar';
import PageNumberBar from '../../common/PageNumberBar/PageNumberBar';
import ListsItem from '../ListsItem/ListsItem';
import getIdFromUrl from '../../common/getIdFromUrl/getIdFromUrl';
import {withRouter} from 'react-router-dom';
import {PeopleStyleWrapper} from './People.style';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "../../theme/theme";


const People = (props) => {
    const [peopleList, setPeopleList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);
    const [availablePage, setAvailablePage] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    const peopleFilterOnChange = (event) => {
        setSearchValue(event.target.value);
        setQueryString(1, event.target.value);
    };

    const cleanSearchValue = () => {
        setSearchValue('');
        setQueryString(1, null);
    };

    const showPreviousPage = () => {
        searchValue && setPage(page - 1);
        setQueryString(page, searchValue, -1);
    };

    const showNextPage = () => {
        searchValue && setPage(+page + 1);
        setQueryString(page, searchValue, 1);
    };

    const setQueryString = (page, searchValue, action = null) => {
        let currentPage = action ? +page + action : page;
        setPage(currentPage);
        props.history.push({
            pathname: '/people',
            search: `?page=${currentPage}${searchValue ? ('&search=' + searchValue) : ''}`
        });
    };

    const getDataFromApi = (promise) => {
        promise.then(result => {
            let {previous, next, results} = result;
            setPeopleList(results);
            setAvailablePage({next, previous});
            setIsLoading(false);
        });
    };


    useEffect(() => {
        setIsLoading(true);
        setQueryString(page, searchValue);
        searchValue
            ? getDataFromApi(peopleAPI.getFilteredPeoples(searchValue, page))
            : getDataFromApi(peopleAPI.getPeoples(page));
    }, [page, searchValue, setPeopleList, setIsLoading]);


    const toItem = useCallback(item => <ListsItem name={item.name} id={getIdFromUrl(item.url)}
                                                  key={item.name} theme={props.theme}/>);
    const personLinksList = peopleList.map(toItem);


    const PeopleStyleWrapper = styled.div`
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


    return <ThemeProvider theme={props.theme === 'theme-light' ? lightTheme : darkTheme}>
        <PeopleStyleWrapper>
            <SearchBar searchValue={searchValue} theme={props.theme}
                       filterOnChange={peopleFilterOnChange} cleanSearchValue={cleanSearchValue}
                       placeholder={'Search by name'}/>
            <div>
                {
                    isLoading
                        ? <LoadingSpinner theme={props.theme}/>
                        : personLinksList
                }
                <PageNumberBar availablePage={availablePage}
                               theme={props.theme}
                               showPreviousPage={showPreviousPage}
                               showNextPage={showNextPage}/>
            </div>
        </PeopleStyleWrapper>
    </ThemeProvider>;
};

export default withRouter(People);
