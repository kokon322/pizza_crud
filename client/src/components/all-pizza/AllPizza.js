import React, {useState} from 'react';
import {deleteById, updatePizzaById} from "../../services";
import {Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";


const AllPizza = () => {
    const dispatch = useDispatch();
    const {pizza} = useSelector(state => state);
    const [isOpen, setIsOpen] = useState(true);

    const isOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    const deleteHandler = async (id) => {
        const isDelete = await deleteById(id);
        if (isDelete) {
            let result = pizza.filter(pizza => pizza.id !== id);

        }
    }

    const updateHandler = async (id) => {
        // const isUpdate = await updatePizzaById(id);
        let filter = pizza.findIndex(pizza => pizza.id === id);
        pizza[filter].name = 'EVGEN';
        pizza[filter].description = 'EVGEN';
        pizza[filter].img = 'aslkfgnaslkgnalsknglaskng'

    }

    return (
        <div>
            {pizza ?
                <div>
                    {pizza.map(pizza =>
                        <div className="d-inline-block " key={pizza.id}>
                            {isOpen ?
                                <Card style={{width: '22rem'}}>
                                    <Card.Img variant="top" src={pizza.img}/>
                                    <Card.Body>
                                        <Card.Title>{pizza.name}</Card.Title>
                                        <Card.Text>
                                            {pizza.description}
                                        </Card.Text>
                                        <Button onClick={isOpenHandler}
                                                variant="primary">open</Button>
                                    </Card.Body>
                                </Card>
                                :
                                <Card style={{width: '22rem'}}>
                                    <Card.Img variant="top" src={pizza.img}/>
                                    <Card.Body>
                                        <input placeholder={pizza.name}/>
                                        <textarea placeholder={pizza.description} cols="30" rows="8"/>
                                        <Button className="m-1" onClick={isOpenHandler}
                                                variant="primary">open</Button>
                                        <Button className="m-1" onClick={() => deleteHandler(pizza.id)}
                                                variant="primary">delete</Button>
                                        <Button className="m-1" onClick={() => updateHandler(pizza.id)}
                                                variant="primary">update</Button>
                                    </Card.Body>
                                </Card>
                            }
                        </div>
                    )}

                </div>


                :
                <div>Not Found Pizza</div>
            }
        </div>
    );
}

export default AllPizza;