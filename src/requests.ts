import axios from 'axios'

const baseUrl = 'https://eugvs.pythonanywhere.com/';
const baseApiUrl = baseUrl + 'api/';

export const get = (url: string) => {
  return axios.get(
    baseApiUrl + url,
  );
};

export const post = (url: string, data: object) => {
  return axios.post(
    baseApiUrl + url,
    data
  );
};

export const del = (url: string, data: object) => {
  return axios.delete(
    baseApiUrl + url,
    data
  )
};
