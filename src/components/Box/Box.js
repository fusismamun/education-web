import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Box.css'

const Box = () => {
    return (
        <>
            <div className='background-colr'>
            <Container>
            <Row>
        <Col sm={4}><h1>Best Platform to learn everything.</h1></Col>
        <Col sm={8}>
            <Row>
            <Col className='box' sm>sm=true</Col>
            <Col className='box' sm>sm=true</Col>
            <Col className='box' sm>sm=true</Col>
            </Row>
        </Col>
      </Row>
            </Container>
            </div>
        </>
    );
};

export default Box;