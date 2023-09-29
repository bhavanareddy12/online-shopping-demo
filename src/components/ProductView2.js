import React, {useRef} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating  from './Rating';
import {BiRupee} from 'react-icons/bi';
import AddToCart from '../components/AddToCart';
import Wishlist from '../components/Wishlist';
import { Link } from "react-router-dom";

function ProductView2(props) {
    const {gridVal,productsList} = props

       const[addBtn, setAddBtn] = React.useState(false)
        const ref = useRef(null)
        
        const handleMouseOver = (index) => {
            if(ref.current === index){
                setAddBtn(true)
                ref.current = index 
            }  
            else{
                setAddBtn(false)
                ref.current = index
            }
        }

        const handleMouseOut = (index) => {
            setAddBtn(false)
            ref.current = index
        }

       // console.log(ref.current)
    return(
        <> 
            <Row className='m-0 h-100'>
                {productsList.length > 0 && productsList.map((product,index) => (
                <Col key={product.id} md={gridVal} className={`m-0 p-0 ${ref.current === index ? 'hover-cardBlock' : ''}`}>
                    <Card className="position-relative card-hover rounded-0 h-100 pt-3" onMouseOver={() => handleMouseOver(index)} onMouseOut={() => handleMouseOut(index)}>
                        {addBtn && (ref.current === index && <div className="text-danger position-absolute cursor-pointer wishlist-Icon"><Wishlist type='2' /></div>)}
                        <div className='mx-auto' style={{width:'80%',height:'250px'}}>
                            <Link to="category/product" state={{ productId : product.id}} className='tempalte2-img'>
                                <Card.Img className='tempalte2-img d-flex' variant="top" src={product.image} />
                            </Link>
                        </div>
                        <Card.Body>
                            <Link to="category/product" state={{ productId : product.id}}>
                                <Card.Title style={{fontSize: 16}}>{product.title}</Card.Title>
                            </Link>
                            <small><strong className="text-success">In Stock</strong></small>
                            <div className='mt-2 mb-3 text-warning'><Rating rating={product.rating}/></div>
                            <p className='rupee-clr'><BiRupee/>{product.price}</p>
                            {addBtn && (ref.current === index && <AddToCart quantity={1} productId={product.id}/>) }
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </>
    )
}

export default ProductView2