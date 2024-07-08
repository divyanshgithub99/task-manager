import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:5000/tasks/';

const getTasks = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const createTask = (task) => {
  return axios.post(API_URL, task, { headers: authHeader() });
};

const updateTask = (id, task) => {
  return axios.put(`${API_URL}${id}`, task, { headers: authHeader() });
};

const deleteTask = (id) => {
  return axios.delete(`${API_URL}${id}`, { headers: authHeader() });
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};