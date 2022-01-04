import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';



const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <div className='logo'>
                        <img src="images/logo.png" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <NavDropdown bg="dark" title="Products" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Docs" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Staking" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Stake UMX</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Stake DGN</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Stake SpaceX</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;