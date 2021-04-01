import React from 'react';
import {deleteById, updatePizzaById} from '../../services';
import {Button, Card} from "react-bootstrap";


const Pizza = (props) => {
    const deletePizza = (id) => {
        deleteById(id);

    }

    const updatePizza = (id) => {
        updatePizzaById(id);
    }

    const {pizza} = props;
    return (
        <>
            <Card style={{width: '22rem'}} className="d-lg-inline-flex mr-2 p-2">
                <Card.Img variant="top" src={pizza.img}/>
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        {pizza.description}
                    </Card.Text>
                    <Button onClick={() => deletePizza(pizza.id)} variant="primary">delete</Button>
                    <Button onClick={() => updatePizza(pizza.id)} variant="primary">update</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Pizza;
