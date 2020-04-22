import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID yzWrvuo5kYD3LvXPyeOKUEOKMGvxuEI555lGPeokA-E'
    }
});