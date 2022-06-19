import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '../Box/Box';

const Home = () => {
    return (
        <>
            <div className='background'>
            <div className='container'>
                <Container>
                <Row className="justify-content-md-center">
                <Col xs lg="8">
                <h1>Choose The Best Institute for  <br />
                <span>Education !</span></h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem itaque vitae dolorum deleniti excepturi odio quos tenetur minima distinctio!</p>
                <button className='btn'>Get Started</button>
                </Col>
                <Col></Col>
                </Row>
                </Container>
            </div>
            <Box></Box>
            </div>
            
        </>
    );
};

export default Home;