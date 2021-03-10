import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
