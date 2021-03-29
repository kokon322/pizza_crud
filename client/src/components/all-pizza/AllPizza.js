import React, {useState} from 'react';
import {fetchAllPizza} from "../../services";
import Pizza from "../pizza/Pizza";

const AllPizza = () => {
    const [pizza, setPizza] = useState([]);

    const getAllPizza = () => {
        fetchAllPizza()
            .then(value => {
                setPizza(value.data);
            });
    };
    return (
        <div>
            <button onClick={getAllPizza}>get all pizza</button>
            {pizza.map(pizza => <Pizza key={pizza.id} pizza={pizza}/>)}
        </div>
    );
};

export default AllPizza;