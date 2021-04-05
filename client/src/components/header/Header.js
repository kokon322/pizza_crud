import React, {useState} from 'react';
import {Button, Form, Modal, ModalBody, Nav, Navbar} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import {useDispatch} from "react-redux";
import {addOnePizza} from "../../services";

const Header = () => {

    const [newPizza, setNewPizza] = useState({name: '', description: '', img: ''});

    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const handleClose = () => setShow(prev => !prev);

    const addPizza = () => {
        addOnePizza(newPizza.name, newPizza.description, newPizza.img);
        dispatch({type: 'ADD_NEW_PIZZA', payload: newPizza});
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="home">Pizza CRUD</Navbar.Brand>
                <Nav className="mr-auto"/>
                <Form inline>
                    <Button onClick={handleClose} variant="outline-info">Add New Pizza</Button>
                </Form>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <Modal.Title>
                        Add new Pizza
                    </Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Name of Pizza
                            </Form.Label>
                            <Form.Control type="text" placeholder="margarita" onChange={({target: {value}}) =>
                                setNewPizza({...newPizza, name: value})}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Description of Pizza
                            </Form.Label>
                            <Form.Control type="text" placeholder="very special pizza for you"
                                          onChange={({target: {value}}) =>
                                              setNewPizza({...newPizza, description: value})}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                URL IMG of Pizza
                            </Form.Label>
                            <Form.Control type="text" placeholder="url?sa=i&url=http%3A%2F%2F"
                                          onChange={({target: {value}}) =>
                                              setNewPizza({...newPizza, img: value})}/>
                        </Form.Group>
                    </Form>
                </ModalBody>
                <Button variant="primary" onClick={addPizza}>add new Pizza</Button>
            </Modal>
        </>
    );
};

export default Header;