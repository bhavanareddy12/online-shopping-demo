import React from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = ({toastData}) => {
    const {type,msg} = toastData
    if(type === 'success'){
        toast.success(msg)
    }
    else if(type === 'error'){
        toast.error(msg)
    }
    
    return(
       <> 
        <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
        </>
    )
}

export default ToastMessage