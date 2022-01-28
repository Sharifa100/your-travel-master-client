import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from '../../assets/images/download.png';
import useAuth from '../../Hook/useAuth';
import './Header.css';


const Header = () => {
    const {user,logOut} = useAuth();
    const{displayName, email, photoURL}=user;
    // const { user, handleLogout } = useFirebase();
    return (
        <div style={{ marginBottom: "100px" }}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'  >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" >  <span><img className="logo" src={img} width="50px"  alt="Logo" /></span> Your Travel Goru
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home">HOME</Nav.Link>
                            <Nav.Link as={HashLink} to="/allservices">SERVICES</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={HashLink} to="/dashboard">DASHBOARD</Nav.Link>
                           
                        </Nav>
                        
                        <Nav>
                       {/* {user.email &&  <Nav.Link as={HashLink} to="/booking/:id">Booking</Nav.Link>} */}
                       {user.email &&  <Nav.Link as={HashLink} to="/orders">Orders</Nav.Link>}
                            {user.email && <span style ={{color:'white'}}>{user.email}{user.displayName}</span>}
                            {user?.email ?
                            <Nav.Link as={HashLink} to="/signup" onClick={logOut}>SIGNUP</Nav.Link>
                            :
                            <Nav.Link as={HashLink}  to="/login">LOGIN</Nav.Link>
}
                             </Nav>
                            
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default Header;