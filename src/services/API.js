import axios from 'axios';
import md5 from 'md5';

export const publicKey = '9eb7543b01ed82222cf417012b8c86df';
export const privateKey = '65a467ffc50684a7822d0f36b1667edaa1248edc';

export const API = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

export const ts = new Date().getTime();
export const hash = md5(ts + privateKey + publicKey).toString();
