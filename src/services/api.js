// frontend/src/services/api.js

import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production'
  ? 'http://15.165.19.11/api'  // EC2 인스턴스의 퍼블릭 IP 또는 도메인으로 변경하세요
  : '/api';  // 개발 환경에서는 프록시 설정을 사용

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchApiHome = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching API home:', error);
    throw error;
  }
};

export const fetchData = async () => {
  try {
    const response = await api.get('/data/');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};