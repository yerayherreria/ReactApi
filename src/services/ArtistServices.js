import axios from 'axios';

const baseURL = 'https://project-three-models.vercel.app/artist';

const apiService = axios.create({
baseURL,
});

export const getArtists = () => {
    return apiService.get();
};

export const getArtist = (postId) => apiService.get(postId);

export const createArtist = (postData) => {
return apiService.post('/', postData);
};

export const updateArtist = (postId, updatedData) => {
return apiService.put(`/${postId}`, updatedData);
};

export const deleteArtist = (postId) => apiService.delete(postId);