import StoreAPi from './api.js';

export const loginApiData = (user,pass) => {
    let payload = {
        username: user,
        password: pass
    }
    return StoreAPi.post(`auth/login`, payload).then(res=>{
        return res.data
    }).catch((error)=>{
        return error
    })
}