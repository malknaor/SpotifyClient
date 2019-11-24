import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import localStorageService from '../Services/LocalStorageService';

const spotify = axios.create({
    baseURL: 'http://localhost:8888'
});

// Request Interceptor
spotify.interceptors.request.use(
    config => {
        const token = localStorageService.getToken();

        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
            // config.headers['Content-type'] = 'application/x-www-form-urlencoded';
        }

        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// Response Interceptor
spotify.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const originalRequest = error.config;

        if (originalRequest._retry === undefined) {
            originalRequest._retry = false;
        }
        
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            return spotify.get('/refresh_token', {
                params: {
                    'refresh_token': localStorageService.getRefreshToken()
                }
            })
            .then(res => {
                if (res.status === 200) {
                    // Update new access_token in local storage
                    localStorageService.setToken(res.data);

                    // Change Authorization header
                    spotify.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getToken();

                    // Return originalRequest
                    return spotify(originalRequest);
                }
            });
        }

        if (error.response.status === 401 && originalRequest.url === 'http://localhost:8888/refresh_token') {
            Router.push('/');
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);

export default spotify;