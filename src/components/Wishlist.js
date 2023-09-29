import React from 'react';
import { Button } from 'react-bootstrap';
import {GiSelfLove} from 'react-icons/gi';

const Wishlist = (type) => {
    return(
       <>{ type == '1' ? <><Button className="background-trans border-blue wishlist-btn color-blue"><GiSelfLove/>Add to wishlist</Button></> : <GiSelfLove/>}</> 
       
    )
}

export default Wishlist