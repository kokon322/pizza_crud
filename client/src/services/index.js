import axios from "axios";

const AXIOS = axios.create({
    baseURL: 'http://localhost:5000'
});

export const fetchAllPizza = async () => {
    const {data} = await AXIOS.get('/pizza');
    return data;
};

export const deleteById = async (id) => {
    return await AXIOS.delete(`/pizza/?id=${id}`);
};

export const addOnePizza = async (name, description, img) => {
    return await AXIOS.post('/pizza', {
        name: name,
        description: description,
        img: img
    });
};

export const updatePizzaById = async (id, name, description, img) => {
    return await AXIOS.put(`/pizza/?id=${id}`, {
        name: name,
        description: description,
        img: img
    });
};