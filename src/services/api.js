import axios from 'axios';

const StoreAPi = axios.create({
  baseURL: `https://fakestoreapi.com/`,
  headers: { 'content-type': 'application/json; charset=utf-8' } 
});

export default StoreAPi