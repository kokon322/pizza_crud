import React, {useState} from 'react';
import {deleteById, updatePizzaById} from "../../services";
import {Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";


const AllPizza = () => {

        const [updatePizza, setUpdate] = useState({name: '', description: '', img: ''});
        const dispatch = useDispatch();
        const {pizza} = useSelector(state => state);
        const [isOpen, setIsOpen] = useState(true);

        const isOpenHandler = () => {
            setIsOpen(!isOpen);
        };

        const deleteHandler = async (id) => {
            const isDelete = await deleteById(id);
            if (isDelete) {
                let result = pizza.filter(pizza => pizza.id !== id);
                dispatch({type: 'DELETE_PIZZA', payload: result});
            }
        };

        const updateHandler = async (id) => {
            const isUpdate = await updatePizzaById(id, updatePizza.name, updatePizza.description, updatePizza.img);
            if (isUpdate) {
                let filter = pizza.findIndex(pizza => pizza.id === id);
                pizza[filter].name = updatePizza.name;
                pizza[filter].description = updatePizza.description;
                pizza[filter].img = updatePizza.img;
                dispatch({type: 'UPDATE_PIZZA', payload: pizza});
            }
        };

        return (
            <div>
                {pizza ?
                    <div>
                        {pizza.map(pizza =>
                            <div className="d-inline-block " key={pizza.id}>
                                {isOpen ?
                                    <Card style={{width: '22rem'}} className="m-2">
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
                                    <Card style={{width: '22rem'}} className="m-2" key={pizza.id}>
                                        <Card.Img variant="top" src={pizza.img}/>
                                        <Card.Body>

                                            <input defaultValue={pizza.name} onChange={({target: {value}}) =>
                                                setUpdate({...updatePizza, name: value})}/> Name <br/>

                                            <input defaultValue={pizza.img} onChange={({target: {value}}) =>
                                                setUpdate({...updatePizza, img: value})}/> Img <br/>

                                            <textarea defaultValue={pizza.description} cols="30" rows="8"
                                                      onChange={({target: {value}}) =>
                                                          setUpdate({...updatePizza, description: value})}/><br/>

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
;

export default AllPizza;