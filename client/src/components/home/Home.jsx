import React from 'react'
import './home.css'
import pic from './resources/profile-photo.png'
import { BiExit } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Home () {
  const c = new Cookies();
  const username = c.get('username');
  const navigate = useNavigate();
  const style = {fontSize: "35px"}

  const signOut = () => {
    c.remove('username');
    navigate("/")
  }

  return (
    <div className="body">
      <div className = "menu-bar">
        <div className= "logo-content">
          <div className= "logo">
            <div className = "logo-name">MATETIC</div>
          </div>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/home">INICIO</Link>
          </li>
          <li>
            <Link to="/home/mateDBH4">-- Funciones</Link>
          </li>
          <li>
            <Link to="/home/foroGeneral">FORO GENERAL</Link>
          </li>
        </ul>
        <ul className="nav-list-down">
          <li>
            <Link to="/home/userData">Datos usuario</Link>
          </li>
          <li>
            <Link to="/home/calificaciones">Calificaciones</Link>
          </li>
        </ul>
        <div className= "profile-content">
          <div className="user-zone">  
          </div>
          <div className="profile">
            <div className="profile-details">
              <img src={pic} alt="profile-img"></img>
              <div className = "name-prof">
                <div className= "name">{ username }</div>
                <div className= "prof">Profesor</div>
              </div>
              <BiExit onClick={ signOut } className= "icon" style= { style }/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Home