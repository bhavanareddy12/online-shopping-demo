export const userNameFunc = (user) => {
    localStorage.setItem('username', user);
}

export const userIdFunc = (id) => {
    localStorage.setItem('userId', id);
}

export const getUserNameFunc = () => {
    return localStorage.getItem('username')
}

export const getUserIdFunc = () => {
    return localStorage.getItem('userId')
}

export const storeCartData = (data) => {
    let cartProducts = []
    cartProducts = localStorage.getItem('cartProductsList') || "[]";
    cartProducts = JSON.parse(cartProducts);
    console.log(cartProducts,data)
    if(cartProducts.length === 0){
        cartProducts.push(data)
        localStorage.setItem('cartProductsList', JSON.stringify(cartProducts))
    }
    else{
        const found = cartProducts.some(el => el.productId === data.productId);
        if (!found) cartProducts.push({productId:data.productId, quantity: data.quantity });
        if(found){
            cartProducts.filter((x=>{
                if(x.productId === data.productId){
                            x.quantity = x.quantity + data.quantity
                            console.log(x)
                            return x
                        }
                    }))
        }
        localStorage.setItem('cartProductsList', JSON.stringify(cartProducts))
    }
    
}

export const getCartData = () => {
    return JSON.parse(localStorage.getItem('cartProductsList'));
}

export const clearLocalStorageFunc = () => { 
    localStorage.clear();
}