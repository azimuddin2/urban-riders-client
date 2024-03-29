import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Urban Riders.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <div className='container p-0'>
            <div className='container header py-3'>
                <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
                    <Container>
                        <Navbar.Brand as={Link} to='/'>
                            <img style={{ height: '20px' }} src={logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='justify-content-end align-items-center flex-grow-1 pe-3 nav-items'>
                                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/destination'>Destination</Nav.Link>
                                <Nav.Link as={Link} to='/Services'>Services</Nav.Link>
                                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                                {
                                    user?.uid ?
                                        <button onClick={handleLogOut} className='fw-semibold login-btn ms-lg-4'>Logout</button>
                                        :
                                        <Nav.Link className='login-btn' as={Link} to='/login'>Login</Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;