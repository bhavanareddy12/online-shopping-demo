import React,{useEffect, useState} from "react";
import { Table, Button} from 'react-bootstrap';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {getCartData} from '../../utils/localStoargeData';
import {AllProductData} from '../../services/productApi';


const CartItems = () => {
  const[products, setProducts] = useState([])

  useEffect(()=>{
    (async () => {
      let cartData =await getCartData();

      let productData = await AllProductData()

      //quantity append to products
      productData.filter((data) => {
        cartData.filter(y=>{
          if(data.id === y.productId){
            data.quantity = y.quantity
            return data
          }
        })
      })

    //filtering cart products
    let results = productData.filter(({ id: id1 }) => cartData.some(({ productId: id2 }) => id2 === id1));
    setProducts(results)
      //cartData = cartData.length
      //await store.dispatch({type:"increment", value:cartData});
    })();
    
  },[])

  

  //product remove function
  const handleremove = (id) => {
    let products = JSON.parse(localStorage.getItem('cartProductsList'))
    products = products.length > 0 && products.filter(x=>x.productId !== id)
    console.log(products,'products')
    localStorage.setItem('cartProductsList', JSON.stringify(products))
  }

  //
  const quantityPricefunc = (quantity,price) => {
      return quantity * price
  }
    return(
    <>
    <Table striped>
      <thead>
        <tr>
          <th>Image</th>
          <th>Product Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    {products.length > 0 && products.map((product,i)=>{
      return <tr>
          <td style={{width:'100px'}}><img className="w-100" src={product.image}/></td>
          <td>{product.title}</td>
          <td>{quantityPricefunc(product.quantity,product.price)}</td>
          <td>{product.quantity}</td>
          <td><AiOutlineCloseCircle className="cursor-pointer" onClick={()=>handleremove(product.id)}/></td>
        </tr>
    })}
    </tbody>
    </Table>
    <p className='d-flex justify-content-end'><Button>Remove All</Button></p>
    </>
    )
}

export default CartItems