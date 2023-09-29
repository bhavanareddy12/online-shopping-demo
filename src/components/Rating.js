import React from 'react'
import {FaRegStar, FaStar} from 'react-icons/fa';

const Rating = ({rating}) => {
    const totalStars = 5;
    const activeStars = rating.rate;
    return (
        <>
        {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? <FaStar/> : <FaRegStar/>;
      })}
        </>
    )
}

export default Rating