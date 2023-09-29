import React from 'react'
import ProductView2 from '../../components/ProductView2';
import {Container} from 'react-bootstrap';

const Shop = () => {
    return(
        <Container className='my-5'>
            <ProductView2 gridVal={3}/>
        </Container>
    )
}

export default Shop