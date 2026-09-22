import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
});

export const geocodePlace = (query) =>
  api.get('/geocode', { params: { q: query } });

export const startSimulation = (bounds) =>
  api.post('/simulate', { bounds });

export const getJobStatus = (jobId) =>
  api.get(`/status/${jobId}`);

export const getSimulationResult = (jobId) =>
  api.get(`/results/${jobId}`);

export const downloadReport = (jobId) =>
  api.get(`/report/${jobId}`, { responseType: 'blob' });

export default api;