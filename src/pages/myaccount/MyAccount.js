import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Login from '../login/Login';
import Register from '../register/Register';
import './styles.css';

function MyAccount(){
    return(
        <Card className='w-md-30 mx-auto my-5'>
            <Card.Body className="background-blue">
            <Login/>
                {/* <Tabs defaultActiveKey="login" id="my-account" className="mb-3 justify-content-center border-0 login-tabs">
                    <Tab eventKey="login" title="LOGIN">
                        <Login/>
                    </Tab>
                    <Tab eventKey="register" title="REGISTER">
                        <Register/>
                    </Tab>
                </Tabs> */}
            </Card.Body>
        </Card>
    )
}

export default MyAccount