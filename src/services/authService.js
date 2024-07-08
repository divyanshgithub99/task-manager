import axios from 'axios';

const API_URL = 'http://localhost:5000/users/';

const signup = (username, password) => {
  return axios.post(API_URL + 'signup', { username, password });
};

const login = (username, password) => {
  return axios.post(API_URL + 'login', { username, password })
    .then(response => {
      if (response.data.token && response.data.user._id) {
        localStorage.setItem('user', JSON.stringify({
          token: response.data.token,
          userId: response.data.user._id
        }));
      }
      return response.data;
    });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  signup,
  login,
  logout,
  getCurrentUser,
};
