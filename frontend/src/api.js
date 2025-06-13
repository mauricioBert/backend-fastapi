import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Altere para sua URL pública do Serveo se estiver testando via túnel

export const getColor = () => axios.get(`${BASE_URL}/color`);
export const getCat = () => axios.get(`${BASE_URL}/cat`);
export const getRandomPhoto = () => axios.get(`${BASE_URL}/random-photo`);
export const getTime = () => axios.get(`${BASE_URL}/time`);
export const getScare = () => axios.get(`${BASE_URL}/scare`);
export const getLookalike = () => axios.get(`${BASE_URL}/lookalike`);
