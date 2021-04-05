import React, {useState} from 'react';
import {Button, Form, Modal, ModalBody, Nav, Navbar} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(!show);

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
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>
                                Name of Pizza
                            </Form.Label>
                            <Form.Control type="text" placeholder="margarita"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>
                                Description of Pizza
                            </Form.Label>
                            <Form.Control type="text" placeholder="very special pizza for you"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>
                                URL IMG of Pizza
                            </Form.Label>
                            <Form.Control type="text" placeholder="url?sa=i&url=http%3A%2F%2F"/>
                        </Form.Group>
                    </Form>
                </ModalBody>
                <Button variant="primary">add new Pizza</Button>
            </Modal>
        </>
    );
};

export default Header;