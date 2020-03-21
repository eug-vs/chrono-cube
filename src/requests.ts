import axios, { AxiosResponse } from 'axios';

const baseUrl = 'https://eugvs.pythonanywhere.com/';
const baseApiUrl = baseUrl + 'api/';

export const get = (url: string): Promise<AxiosResponse> => {
  return axios.get(
    baseApiUrl + url,
  );
};

export const post = (url: string, data: object): Promise<AxiosResponse> => {
  return axios.post(
    baseApiUrl + url,
    data
  );
};

export const del = (url: string, data: object): Promise<AxiosResponse> => {
  return axios.delete(
    baseApiUrl + url,
    data
  )
};
