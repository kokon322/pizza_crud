import React, {useState} from 'react';
import {deleteById} from '../../services';


const Pizza = (props) => {
    const [isDelete, setIsDelete] = useState();

    console.log(isDelete);

    const deletePizza = (id) => {
        deleteById(id).then(value => {
            setIsDelete(value);
        });
    };


    const {pizza} = props;
    return (
        <div>
            <h3>id: {pizza.id} name: {pizza.name} <img height="150px" src={pizza.img} alt={pizza.id}/></h3>
            <button onClick={() => deletePizza(pizza.id)}>delete</button>
        </div>
    );
};

export default Pizza;
