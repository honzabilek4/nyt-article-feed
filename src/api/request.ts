import axios from 'axios';

const request = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  params: { 'api-key': process.env.VUE_APP_API_TOKEN },
});

export default request;
