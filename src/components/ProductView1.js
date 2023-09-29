import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating  from './Rating';
import {BiRupee} from 'react-icons/bi';
import AddToCart from '../components/AddToCart';
import Wishlist from '../components/Wishlist';
import { Link } from "react-router-dom";

function ProductView1(props) {
    return(
        <>      
            {props.productsList.length > 0 ? props.productsList.map((product)=>{
                return <Card className='rounded-0 mb-2' key={product.id}>
                <Row>
                    <Col md={4} className='d-flex align-items-center justify-content-center'>
                        <Link to="category/product" state={{ productId : product.id}} className='template1-img'>
                            <Card.Img className='template1-img' variant="top" src={product.image} />
                        </Link>
                    </Col>
                    <Col md={8} className='d-flex align-items-center'>
                        <Card.Body>
                            <Link to="category/product" state={{ productId : product.id}}>
                                <Card.Title style={{fontSize: 16}}>{product.title}</Card.Title>
                            </Link>
                            <small><strong className="text-success">In Stock</strong></small>
                            <div className='mt-2 mb-3 text-warning'><Rating rating={product.rating}/></div>
                            <p className="rupee-clr"><BiRupee/>{product.price}</p>
                            <Wishlist type='1' /> <AddToCart quantity={1} productId={product.id}/>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            }) : <p>API did not provided any product, try again.</p>
        }
            
        </>
    )
}

export default ProductView1