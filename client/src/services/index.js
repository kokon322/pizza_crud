import axios from "axios";

const AXIOS = axios.create({
    baseURL: 'http://localhost:5000'
});

export const fetchAllPizza = async () => {
    return await AXIOS.get('/pizza');
};

export const deleteById = async (id) =>{
    return await AXIOS.delete(`/pizza/?id=${id}`);
};