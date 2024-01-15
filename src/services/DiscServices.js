import axios from 'axios';

const baseURL = 'http://localhost:3000/disc';

const apiService = axios.create({
baseURL,
});

export const getDiscs = () => {
    return apiService.get();
};

export const getDisc = (postId) => {
return apiService.get(`/${postId}`);
};

export const createDisc = (postData) => {
return apiService.post('/', postData);
};

export const updateDisc = (postId, updatedData) => {
return apiService.put(`/${postId}`, updatedData);
};

export const deleteDisc = (postId) => {
return apiService.delete(`/${postId}`);
};