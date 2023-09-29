import React from 'react';
import {Button} from 'react-bootstrap';

const CartTotal = () => {
    return(
        <aside className='border border-2 rounded px-4'>
            <h6 className='border-bottom py-2 mt-3'><strong>CART TOTALS</strong></h6>
            <div className='d-flex justify-content-between my-3'>
                <strong>Sub Total</strong>
                <p className='m-0'>100</p>
            </div>
            <div className='d-flex justify-content-between my-3'>
                <strong>Shipping</strong>
                <p className='m-0'>100</p>
            </div>
            <div className='d-flex justify-content-between my-3 border-bottom'>
                <strong>Sales Tax:</strong>
                <p className='m-0'>10</p>
            </div>
            <div className='d-flex justify-content-between my-3'>
                <strong>Estimated Total</strong>
                <h5 className='m-0'>100</h5>
            </div>
            <Button className='my-3 w-100'>Proceed to Checkout</Button>
        </aside>
    )
}

export default CartTotal