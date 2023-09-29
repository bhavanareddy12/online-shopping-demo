import React,{useEffect, useState} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { RiShoppingBag3Fill } from 'react-icons/ri'
import {AllProductData} from '../../services/productApi'
import {getCartData} from '../../utils/localStoargeData'
import './styles.css';

const MiniCart = ({newClass,count}) => {
    const navigate = useNavigate();
    const [products,setProducts] = useState([])

    useEffect(()=>{
        (async () => {
            let cartData =await getCartData();
            console.log(cartData)
            let productData = await AllProductData()
            const results = productData.filter(({ id: id1 }) => cartData.some(({ productId: id2 }) => id2 === id1));
            setProducts(results)
        //cartData = cartData.length
        //await store.dispatch({type:"increment", value:cartData});
          })();
    },[count])

    const cartProducts = products.length >0 && products.map((product,i)=>{
            return <Row key={i} className='border py-2'>
                <Col xs={3}><img src={product.image} className='w-100'/></Col>
                <Col xs={9} className='text-start'>
                    <p className='text-start mb-0'><small>{product.title}</small></p>
                    <small>Price: {product.price}</small>
                </Col>
            </Row>
        })


     //checkout button redirection
     const handleCheckout =()=>{
        navigate('/cart')
     }   
    return(
        <Card className={`position-absolute cart-dropdown mt-2 ${newClass}`}>
            <Card.Body>
                <div class="cart-empty text-center border-bottom mb-2">
                    
                    {count === 0 ? <div className="py-5 "><div class="empty-icon"><RiShoppingBag3Fill className='text-danger fs-1'/><div class="empty-text">No products in the cart.</div></div></div> : cartProducts}
                </div>
                <div className='text-end' onClick={handleCheckout}><Button>Checkout</Button></div>
                {/* <small class="cart-noticy text-center text-secondary">We reduce shipping prices to only 2.49 €!</small> */}
            </Card.Body>
        </Card>
    )
} 

export default MiniCart