import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CartTotal from './CartTotal';
import CartItems from './CartItems';

const Checkout = () => {
    return(
        <Container className='mt-5'>
            <Row>
                <Col md={8}><CartItems/></Col>
                <Col md={4}><CartTotal/></Col>
            </Row>
        </Container>
    )
}

export default Checkout