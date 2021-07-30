import axios from 'axios';

const path = process ? process.env.VITE_API_URL : import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${path}/api`,
});

export {
  api,
};
