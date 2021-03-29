import React, {useState} from 'react';
import {fetchAllPizza, addOnePizza} from "../../services";
import Pizza from "../pizza/Pizza";

const AllPizza = () => {
    const [pizza, setPizza] = useState([]);

    const getAllPizza = () => {
        fetchAllPizza()
            .then(value => {
                setPizza(value);
            });
    };

    const addPizza = () =>{
        addOnePizza();
        fetchAllPizza()
            .then(value => {
                setPizza(value);
            });
    }

    return (
        <div>
            <button onClick={getAllPizza}>get all pizza</button>
            <button onClick={addPizza}>add pizza</button>
            {pizza.map(pizza => <Pizza key={pizza.id} pizza={pizza}/>)}
        </div>
    );
};

export default AllPizza;