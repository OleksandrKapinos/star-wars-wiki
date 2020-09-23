import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api'
},);


export const peopleAPI = {
    getPeoples(page) {
        try {
            return axiosInstance.get(`/people/?page=${page}`)
                .then(response => response.data);
        } catch (e) {
            console.log('Error: ', e);
        }
    },
    getFilteredPeoples(value, page) {
        try {
            return axiosInstance.get(`/people/?search=${value}&page=${page}`)
                .then(response => response.data);
        } catch (e) {
            console.log('Error: ', e);
        }
    },
    getCurrentPerson(id) {
        try {
            return axiosInstance.get(`/people/${id}`)
                .then(response => response.data);
        } catch (e) {
            console.log('Error: ', e);
        }
    }
};

export const filmAPI = {
    getFilms() {
        try {
            return axiosInstance.get('/films')
                .then(response => response.data);
        } catch (e) {
            console.log('Error: ', e);
        }
    },
    getCurrentFilm(id) {
        try {
            return axiosInstance.get(`/films/${id}`)
                .then(response => response.data);
        } catch (e) {
            console.log('Error: ', e);
        }
    }
};


