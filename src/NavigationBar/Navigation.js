import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../NavigationBar/Navigation.css'


const NavigationBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/" className="nav-link-spacing">Home</Nav.Link>
                    <Nav.Link href="/Create" className="nav-link-spacing">Create</Nav.Link>
                    <Nav.Link href="/View" className="nav-link-spacing">View/Update</Nav.Link>
                    <Nav.Link href="/Delete" className="nav-link-spacing">Deleted flashcards</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;