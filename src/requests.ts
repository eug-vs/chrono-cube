import axios, { AxiosResponse } from 'axios';

const baseUrl = 'https://eugvs.pythonanywhere.com/';
const baseApiUrl = baseUrl + 'api/';

export const get = (url: string): Promise<AxiosResponse> => axios.get(baseApiUrl + url);

export const del = (url: string): Promise<AxiosResponse> => axios.delete(baseApiUrl + url);

export const post = (url: string, data: object): Promise<AxiosResponse> => axios.post(baseApiUrl + url, data);

