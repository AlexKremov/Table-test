import axios from './axios';

export const getItems = () => axios.get('/items');