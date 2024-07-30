import axios from 'axios'

const url = 'http://localhost:3000';

export const findAllService = () => axios.get(`${url}/news/findAll`);
export const searchNewsByTitleService = (title) => axios.get(`${url}/news/searchNewsByTitle?title=${title}`);