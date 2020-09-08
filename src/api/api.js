import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api'
},);


export const peopleAPI = {
    getPeoples(page) {
        return axiosInstance.get(`/people/?page=${page}`)
            .then(response => response.data);
    },
    getFilteredPeoples(value, page) {
        return axiosInstance.get(`/people/?search=${value}&page=${page}`)
            .then(response => response.data);
    },
    getCurrentPerson(id) {
        return axiosInstance.get(`/people/${id}`)
            .then(response => response.data);
    }
};

export const filmAPI = {
    getFilms() {
        return axiosInstance.get('/films')
            .then(response => response.data);
    },
    getCurrentFilm(id) {
        return axiosInstance.get(`/films/${id}`)
            .then(response => response.data);
    }
};


