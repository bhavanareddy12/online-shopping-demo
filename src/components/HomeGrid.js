import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FiMenu} from "react-icons/fi";
import {BsGridFill, BsGrid3X3GapFill} from "react-icons/bs";
import {TfiLayoutGrid4Alt} from 'react-icons/tfi';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

const HomeGrid = ({handleClick,orderSelectClick}) => {

    return(
        <Alert key='secondary' variant='secondary'>
            <Row className='align-items-center'>
            <Col>
                <FiMenu className='mx-2 cursor-pointer' onClick={()=>handleClick(1)}/>
                <BsGridFill className='mx-2 cursor-pointer' onClick={()=>handleClick(6)}/>
                <BsGrid3X3GapFill className='mx-2 cursor-pointer' onClick={()=>handleClick(4)}/>
                <TfiLayoutGrid4Alt className='mx-2 cursor-pointer' onClick={()=>handleClick(3)}/>
            </Col>
            <Col xs lg="2">
                <span>Show</span>
                <select value="2">
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                </select>
            </Col>
            </Row>
        </Alert>
    )
}

export default HomeGrid