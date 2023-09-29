import StoreAPi from './api.js';

export const AllCategoriesData = () => {
    return StoreAPi.get(`products/categories`).then(res=>{
        return res.data
    })
}