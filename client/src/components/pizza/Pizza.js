import React, {useState} from 'react';
import {deleteById, updatePizzaById} from '../../services';


const Pizza = (props) => {
    const deletePizza = (id) =>{
        deleteById(id);
    }

    const updatePizza = (id) =>{
        updatePizzaById(id);
    }

    const {pizza} = props;
    return (
        <div>
            <h3>id: {pizza.id} name: {pizza.name} <img height="150px" src={pizza.img} alt={pizza.id}/></h3>
            <button onClick={() => deletePizza(pizza.id)}>delete</button>
            <button onClick={()=>updatePizza(pizza.id)}>update</button>
        </div>
    );
};

export default Pizza;
