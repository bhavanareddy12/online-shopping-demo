import React from "react";
import logo from '../assets/images/logo.png';

function Logo(){
    return(

            <img boxSize='150px' src={logo} alt='logo' objectFit='contain' className='w-100 p-x-md-3'/>
    )
}

export default Logo