import axios from "axios";

const AXIOS = axios.create({
    baseURL: 'http://localhost:5000'
});

export const fetchAllPizza = async () => {
    const {data} = await AXIOS.get('/pizza');
    return data;
};

export const deleteById = async (id) =>{
    return await AXIOS.delete(`/pizza/?id=${id}`);
};

export const addOnePizza = async () => {
    return await AXIOS.post('/pizza', {
        name: "Gala",
        description: "Домашня ковбаса, прошутто кото, прошутто кото ді Манзо, зелена цибуля, свіжі помідори, сир “моцарелла”, соус “марінара”",
        img: "https://terramare.vn.ua/wp-content/uploads/2018/11/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F-min-600x400.jpeg"
    });
};

export const updatePizzaById = async (id) =>{
    return await AXIOS.put(`/pizza/?id=${id}`,{
        name: "АМЕРІКАНО “DE LUXE”",
        description: "АМЕРІКАНО “DE LUXE”",
        img: "https://terramare.vn.ua/wp-content/uploads/2018/11/%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D0%BE-min-600x400.jpeg"
    })
}