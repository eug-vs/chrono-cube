import axios from 'axios'

const baseUrl = 'http://localhost:8000/';
const baseApiUrl = baseUrl + 'api/';

export const get = (url) => {
  return axios.get(
    baseApiUrl + url,
  );
};

export const post =  (url, data) => {
  return axios.post(
    baseApiUrl + url,
    data
  );
};
