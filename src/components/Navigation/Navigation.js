import React from 'react';
import logo from '../../Imges/favicon.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand><img className='logo' src={logo}></img></Navbar.Brand>
            <div>
            <Link  className='headers' to="/home">Home</Link>
            <Link  className='headers' to="/service">Services</Link>
            <Link  className='headers' to="/about">About</Link>
            </div>
        </Container>
      </Navbar>
        </>
    );
};

export default Navigation;