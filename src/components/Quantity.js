import React, {useState} from 'react';
import { Button,InputGroup } from 'react-bootstrap';
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai';

const Quantity = ({quantityFunc}) => {
    const [quantity, setQuantity]= useState(1);
    const handleIncrement = () => {
        if (quantity < 20) {
          setQuantity(quantity + 1)
          quantityFunc(quantity + 1)
        }
      }

      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1)
          quantityFunc(quantity - 1)
        }
      }
    const handleChange = (e)=>{
        setQuantity(e.target.value);
        quantityFunc(e.target.value)
       }
    return(
        <div className='d-flex border rounded-pill shadow'>
            
            <InputGroup>
              <Button className="btn bg-transparent py-1 rounded-0 border-0 fs-5 text-dark" onClick={handleDecrement}><AiOutlineMinusCircle/></Button>
              <input type="text" className="form-control border-top-0 border-bottom-0 text-center" value={quantity} onChange={handleChange} style={{width:'60px'}}/>
              <Button className="btn bg-transparent py-1 rounded-0 border-0 fs-5 text-dark" onClick={handleIncrement} ><AiOutlinePlusCircle/></Button>
            </InputGroup>
            
        </div>
    )
}

export default Quantity