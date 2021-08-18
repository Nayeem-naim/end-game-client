import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container,Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" className="mt-3 container" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> Web service </Navbar.Brand>
                    <Nav className="mt-auto m-2 p-2">
                        <Nav.Link href="#home"> Home </Nav.Link>
                        <Nav.Link href="#Service"> Service</Nav.Link>
                        <Nav.Link href="#LogIn"> LogIn </Nav.Link>
                        <Nav.Link href="#About"> About </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Carousel className="container mt-3">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.iqcertificate.org/images/iqcertificate-2.jpg"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.iqcertificate.org/images/iqcertificate-1.jpg"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.iqcertificate.org/images/iqcertificate-2.jpg"
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;