import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Urban Riders.png'
import './Header.css';

const Header = () => {
    return (
        <div className='container p-0'>
            <div className='container header pt-3'>
                <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
                    <Container>
                        <Navbar.Brand as={Link} to='/'>
                            <img style={{ height: '20px' }} src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='justify-content-end align-items-center flex-grow-1 pe-3'>
                                <Nav.Link className='me-3' as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link className='me-3' as={Link} to='/destination'>Destination</Nav.Link>
                                <Nav.Link className='me-3' as={Link} to='/Services'>Services</Nav.Link>
                                <Nav.Link className='me-3' as={Link} to='/contact'>Contact</Nav.Link>
                                <Nav.Link className='me-3 login-btn' as={Link} to='/login'>Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;