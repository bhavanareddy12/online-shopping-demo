import React from 'react'
import { Link } from "react-router-dom";
import './styles.css'

const NotFound = () => {
    return<div class="section text-center">
    <h1 class="error">404</h1>
    <div class="page">Ooops!!! The page you are looking for is not found</div>
    <Link to='/' class=" custom-btn back-home">Back to home</Link>
  </div>
}

export default NotFound