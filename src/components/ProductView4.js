import React, {useRef} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating  from './Rating';
import {BiRupee} from 'react-icons/bi';
import AddToCart from '../components/AddToCart';
import Wishlist from '../components/Wishlist';

function ProductView4({gridVal}) {

    const arrData = [{
        img:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
        title:'All Natural Italian-Style Chicken Meatballs',
        cost:'100'
    },{
        img:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
        title:'All Natural Italian-Style Chicken Meatballs',
        cost:'100'
    },
    {
        img:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
        title:'All Natural Italian-Style Chicken Meatballs',
        cost:'100'
    },
    {
        img:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
        title:'All Natural Italian-Style Chicken Meatballs',
        cost:'100'
    },
    {
        img:'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
        title:'All Natural Italian-Style Chicken Meatballs',
        cost:'100'
    }]

       const[addBtn, setAddBtn] = React.useState(false)
        const ref = useRef(null)
        
        const handleMouseOver = (index) => {
            setAddBtn(true)
            ref.current = index
        }

        const handleMouseOut = (index) => {
            setAddBtn(false)
            ref.current = index
        }

       // console.log(ref.current)
    return(
        <>
            <Row className='m-0'>
                {arrData.length > 0 && arrData.map((item,index) => (
                <Col key={index} md={gridVal} className="m-0 p-0">
                    <Card className="position-relative card-hover rounded-0" onMouseOver={() => handleMouseOver(index)} onMouseOut={() => handleMouseOut(index)}>
                        {addBtn && (ref.current === index && <div className="text-danger position-absolute cursor-pointer wishlist-Icon"><Wishlist type='2' /></div>)}
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title style={{fontSize: 16}}>{item.title}</Card.Title>
                            <small><strong className="text-success">In Stock</strong></small>
                            <div className='mt-2 mb-3 text-warning'><Rating/></div>
                            <p className='rupee-clr'><BiRupee/>{item.cost}</p>
                            {addBtn && (ref.current === index && <AddToCart/>) }
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </>
    )
}

export default ProductView4