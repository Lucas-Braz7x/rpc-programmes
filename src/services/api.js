import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rpc-programmes.herokuapp.com',
});

///programmes
