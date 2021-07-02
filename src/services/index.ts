import axios from 'axios';
axios.defaults.baseURL = 'https://api.got.show/api';


export const get = async (url: string) => {
    try {
        return await (await axios.get(url));
    } catch (error) {
        throw new Error(error);
    }
}

export const getById = async (url: string, params: string) => {
    const newUrl = url + `/${params}`;

    try {
        return await axios.get(newUrl);
    } catch (error) {
        throw new Error(error);
    }
}