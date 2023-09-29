import React from 'react';
import { Container,Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {TiTick} from 'react-icons/ti';

const Wishlist = () => {
    return(
        <Container className='mt-5'>
            <h4>Default Wishlist</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th><input type="checkbox"/></th>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><input type="checkbox"/></td>
                    <td><AiOutlineCloseCircle/></td>
                    <td>Otto</td>
                    <td>100</td>
                    <td><TiTick/> In Stock</td>
                    <td><Button>Add to cart</Button></td>
                    </tr>
                    <tr className='text-right'>
                    <td colSpan={6} style={{textAlign:'right'}}><Button>Add selected to cart</Button> <Button>Add all to cart</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Wishlist