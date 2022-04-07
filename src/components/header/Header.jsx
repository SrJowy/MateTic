import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div class = "container-nav">
            <h1>MateTIC</h1>
            <Link to = "/home" class = "btn"> Acceder sin registro</Link>
        </div>
        
    )
}

export default Header