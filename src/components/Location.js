import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { Button, Modal, Row, Col} from 'react-bootstrap';
import Search from './Search'

function Location(){
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='color-blue bg-white border-white locationButton' onClick={handleShow}>Select location <IoMdArrowDropdown/></Button>
            <Modal size="md" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="border-bottom-0 pb-0" closeButton>
                </Modal.Header>
                <Modal.Body className="pt-0">
                    <h5>Choose your Delivery Location</h5>
                    <small>Enter your address and we will specify the offer for your area.</small>
                    <p className="mt-3"><Search/></p>
                    <Row className='py-3 m-0 border-bottom border-top'>
                        <Col md={4}>Andhra Pradesh</Col>
                        <Col md={{ span: 2, offset: 6 }} className="border rounded">Min:250</Col>
                    </Row>
                    <Row className='py-3 m-0 border-bottom'>
                        <Col md={4}>Telangana</Col>
                        <Col md={{ span: 2, offset: 6 }} className="border rounded">Min:200</Col>
                    </Row>
                    <Row className='py-3 m-0 border-bottom'>
                        <Col md={4}>Chennai</Col>
                        <Col md={{ span: 2, offset: 6 }} className="border rounded">Min:100</Col>
                    </Row>
                    <Row className='py-3 m-0 border-bottom'>
                        <Col md={4}>Kerala</Col>
                        <Col md={{ span: 2, offset: 6 }} className="border rounded">Min:100</Col>
                    </Row>
                    <Row className='py-3 m-0 border-bottom'>
                        <Col md={4}>Benguluru</Col>
                        <Col md={{ span: 2, offset: 6 }} className="border rounded">Min:150</Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Location