import React from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';

class HeaderComponent extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className='logo' src="https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Create pikka</Nav.Link>
                    <Nav.Link href="#signup">signup</Nav.Link>
                    <Nav.Link href="#signin">signin</Nav.Link>
                    <Nav.Link href="#signout">signout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );

    }
}

export default HeaderComponent;