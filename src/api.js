import axios from 'axios';

let tokenLocalStorage = localStorage.getItem('token');

if (tokenLocalStorage == null) {
  tokenLocalStorage = '';
}

const api = axios.create({
  headers: { Authorization: `Bearer ${tokenLocalStorage}` },
});

export default api;
