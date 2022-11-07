import axios, {AxiosResponse} from 'axios';
import { Offers } from '../types/types';

const BACKEND_URL = 'https://10.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response: AxiosResponse<Offers>) => response;

  const onFail = (err: Error) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


export default createAPI;
