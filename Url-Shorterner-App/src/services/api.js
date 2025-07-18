import axios from 'axios';

// Replace with your backend base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const shortenURL = (payload) => api.post('/shorten', payload);
export const getOriginalURL = (shortcode) => api.get(`/resolve/${shortcode}`).then(res => res.data.originalUrl);
export const getStats = () => api.get('/stats').then(res => res.data);