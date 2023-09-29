import React from 'react'
import loaderImg from '../assets/images/Hourglass.gif'

const Loader = () =>{
    return <div className='d-flex flex-column justify-content-center align-items-center h-100'>
        <img src={loaderImg} alt='loader'/>
        </div>
    // <iframe src="https://gifer.com/embed/7TwN" width=480 height=318.632 frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com">via GIFER</a></p>
    // <div style="padding-top:66.382%;position:relative;"><iframe src="https://gifer.com/embed/7TwN" width="100%" height="100%" style='position:absolute;top:0;left:0;' frameBorder="0" allowFullScreen></iframe></div><p><a href="https://gifer.com">via GIFER</a></p>
}

export default Loader