import axios from 'axios'

const baseUrl = 'http://eugvs.pythonanywhere.com/';
const baseApiUrl = baseUrl + 'api/';

export const get = (url) => {
  return axios.get(
    baseApiUrl + url,
  );
};

export const post = (url, data) => {
  return axios.post(
    baseApiUrl + url,
    data
  );
};

export const del = (url, data) => {
  return axios.delete(
    baseApiUrl + url,
    data
  )
};
