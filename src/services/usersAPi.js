import StoreAPi from './api.js';

//Get all users api function
export const AllUsersData = () => {
    return StoreAPi.get(`users`).then(res=>{
        return res.data
    }).catch(err => console.dir(err))
}


//Add product to cart api function
export const AddProductToCart = (userId,quantity,productId) => {
    const data =  {
        userId:userId,
        date:"2023-07-12",
        products:[{productId:productId,quantity:quantity}]
    }
    return StoreAPi.post(`carts`,data).then(res=>{
        return res
    }).catch(err => console.dir(err))
}
