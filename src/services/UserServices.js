import axios from 'axios';

const baseURL = 'https://project-three-models.vercel.app/user';

const apiService = axios.create({
baseURL,
});

export const getUsers = () => {
    return apiService.get();
};

export const getUser = (postId) => apiService.get(postId);

export const createUser = (postData) => {
return apiService.post('/', postData);
};

export const updateUser = (postId, updatedData) => {
return apiService.put(`/${postId}`, updatedData);
};

export const deleteUser = (postId) => apiService.delete(postId);