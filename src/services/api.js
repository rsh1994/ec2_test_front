// frontend/src/services/api.js

import axios from 'axios';

const API_URL = '/api';

export const fetchApiHome = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching API home:', error);
    throw error;
  }
};

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};