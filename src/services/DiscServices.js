import axios from 'axios';

const baseURL = 'https://project-three-models.vercel.app/disc';

const apiService = axios.create({
baseURL,
});

export const getDiscs = () => {
    return apiService.get();
};

export const getDisc = (postId) => apiService.get(postId);

export const createDisc = (postData) => {
return apiService.post('/', postData);
};

export const updateDisc = (postId, updatedData) => {
return apiService.put(`/${postId}`, updatedData);
};

export const deleteDisc = (postId) => apiService.delete(postId);