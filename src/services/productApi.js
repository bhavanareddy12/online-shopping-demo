import StoreAPi from './api.js';

//Get all products api function
export const AllProductData = () => {
    return StoreAPi.get(`products`).then(res=>{
        return res.data
    }).catch(err => console.dir(err))
}

//Sort results api function
export const sortResultsData = (data) => {
    return StoreAPi.get(`products?sort=${data}`).then(res=>{
        return res.data
    }).catch(err => console.dir(err))
}

//Get products in a specific category api function
export const categoryProductsData = (categoryVal, sortVal) => {
    return StoreAPi.get(`products/category/${categoryVal}?sort=${sortVal}`).then(res=>{
        return res.data
    }).catch(err => console.dir(err))
}

//Get a single product api function
export const singleProductData = (id) => {
    return StoreAPi.get(`products/${id}`).then(res=>{
        return res.data
    }).catch(err => console.dir(err))
}
