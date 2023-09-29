import React,{useContext} from 'react';
import { Button } from 'react-bootstrap';
import {AddProductToCart} from '../services/usersAPi';
import {getUserIdFunc,storeCartData, getCartData} from '../utils/localStoargeData';
import { StoreContext } from '../App';

const AddToCart = ({quantity, productId}) => {
    const store = useContext(StoreContext)
    
        const[userId, setUserId] = React.useState();
        
    //Add to cart functionality
    React.useEffect(()=>{
        const id = getUserIdFunc()
        setUserId(id)
    },[])
    const handleAddtoCart = async() => {
        
        const response = await AddProductToCart(userId,quantity,productId)
        if(response.status === 200){
            storeCartData(response.data.products[0])
            let cartData = getCartData();
            cartData = cartData.length
            await store.dispatch({type:"increment", value:cartData});
        }
    
    }
    return(
        <Button className="background-blue border-blue add-btn" onClick={handleAddtoCart}>Add to cart</Button>
    )
}

export default AddToCart