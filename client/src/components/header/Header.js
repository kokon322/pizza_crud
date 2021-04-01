import React from 'react';
import {Button, Form, Nav, Navbar} from "react-bootstrap";

const Header = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        const {target: [{value: name}, {value: email}, {value: password}, {value: age}]} = e;
        console.log(name, email, password, age);
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="home">Pizza CRUD</Navbar.Brand>
                <Nav className="mr-auto"/>
                <Form inline>
                    <Button variant="outline-info">Add New Pizza</Button>
                </Form>
            </Navbar>
            <div>
                <h2>this is input</h2>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input type="number" placeholder="age"/>
                    <br/>
                    <button type="submit">submit</button>
                </form>
            </div>
        </>
    );
};

export default Header;