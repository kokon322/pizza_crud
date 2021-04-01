import React, {useEffect, useState} from 'react';
import {deleteById, fetchAllPizza, updatePizzaById} from "../../services";
import {Button, Card} from "react-bootstrap";


const AllPizza = () => {
    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        fetchAllPizza()
            .then(value => {
                setPizza(value);
            });
    }, []);

    const deleteHandler = async (id) => {
        const isDelete = await deleteById(id);
        if  (isDelete) {
            let result = pizza.filter(pizza => pizza.id !== id);
            setPizza(result);
        }
    }

    const updateHandler = async (id) => {
        // const isUpdate = await updatePizzaById(id);
        let filter = pizza.findIndex(pizza => pizza.id === id);
        pizza[filter].name = 'EVGEN';
        pizza[filter].description = 'EVGEN';
        pizza[filter].img = 'aslkfgnaslkgnalsknglaskng'
        setPizza([...pizza, {id:44, name: 'vasa', description: 'asfasf'}]);
    }

    return (
        <div>
            {pizza.map(pizza => {
                return (
                    <Card style={{width: '22rem'}} className="d-lg-inline-flex mr-2 p-2">
                        <Card.Img variant="top" src={pizza.img}/>
                        <Card.Body>
                            <Card.Title>{pizza.name}</Card.Title>
                            <Card.Text>
                                {pizza.description}
                            </Card.Text>
                            <Button onClick={() => deleteHandler(pizza.id)} variant="primary">delete</Button>
                            <Button onClick={() => updateHandler(pizza.id)} variant="primary">update</Button>
                        </Card.Body>
                    </Card>
                )

            })}
        </div>
    );
};

export default AllPizza;