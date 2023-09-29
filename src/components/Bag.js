import React from "react";
import Badge from 'react-bootstrap/Badge';
import { HiOutlineShoppingBag } from "react-icons/hi";

function Bag({addClassFunc,count}){
    const handleClick = () => {
        addClassFunc()
    }
    return(
        <div className="bag-icon position-relative cursor-pointer" onClick={handleClick}><span className="border border-2 rounded-circle p-2 d-flex border-blue"><HiOutlineShoppingBag/></span><sup><Badge bg="danger" className='rounded-circle'>{count}</Badge></sup></div>
    )
}
export default Bag