import axios from 'axios';

const API_URL = 'http://localhost:5000';  // add base URL

export const login = async (credentials) => {
  const res = await axios.post(`${API_URL}/api/auth/login`, credentials);
  localStorage.setItem('token', res.data.token);
};

export const register = async (credentials) => {
  await axios.post(`${API_URL}/api/auth/register`, credentials);
};
