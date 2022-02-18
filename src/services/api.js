// Services: é onde mantemos nossas configurações de chamada à API;

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export default api;