import React from 'react'
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie'

const privateRoute = ({children}) => {
    const cookie = new Cookies();
    const username = cookie.get("username");
    return username ? children : <Navigate to="/" />
}

export default privateRoute