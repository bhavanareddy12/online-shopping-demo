import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AddToCart from '../../components/AddToCart';
import Quantity from '../../components/Quantity';
import Rating from '../../components/Rating';
import {GiSelfLove} from 'react-icons/gi';
import { useLocation } from 'react-router-dom';
import {singleProductData} from '../../services/productApi';
import Loader from '../../components/Loader';

const ProductDetails = () => {
    const location = useLocation()
    const [productData, setProductData] = React.useState({})
    const [productStatus, setProductStatus] = React.useState(true)
    const [quantity, setQuantity] = React.useState(1);

    //Single product function
    async function singleProductFunc () {
        const response = await singleProductData(location.state.productId)
        setProductData(response)
        setProductStatus(false)
    }

    //quantity getting from child component
    const quantityFromChildFunc = (val) =>{
        setQuantity(val)
    }

    React.useState(()=>{
        singleProductFunc();
    },[])
    
    return(
        <>
            {productStatus ? <Loader/> : 
            <Container className='my-5'>
                <Row>
                    <Col xs={12} md={6} className='bg-light-gray d-flex align-items-center justify-content-center'>
                        <img src={productData.image} alt="product image" style={{width:'inherit'}}/>
                    </Col>
                    <Col xs={12} md={6} className='py-5'>
                        <p></p>
                        <h2>{productData.title}</h2>
                        <h4 className='color-blue my-3'><span className='text-dark'>Current Price : </span>{productData.price}</h4>
                        <div className='mb-4 mt-2 mb-3 text-warning'><Rating rating={productData.rating}/></div>
                        
                        <p>{productData.description}</p>
                        <div className='d-flex align-items-center'>
                            <div style={{marginRight:'10px'}}><Quantity quantityFunc={quantityFromChildFunc}/></div>
                            <div style={{marginRight:'10px'}}><AddToCart quantity={quantity} productId={productData.id}/></div>
                            <div className="background-blue text-white py-1 px-2 fs-5 rounded"><GiSelfLove/></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        }
    </>
        
    )
}

export default ProductDetails