import React from 'react'
import './home.css'
import pic from './resources/profile-photo.png'
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

function Home (comp) {
    const c = new Cookies();
    const username = c.get('username')

  return (
    <div className="body">
      <div class = "menu-bar">
        <div class= "logo-content">
          <div class= "logo">
            <div class = "logo-name">MATETIC</div>
          </div>
        </div>
        <ul class="nav-list">
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
        <ul class="nav-list-down">
          <li>
            <Link to="/home/userData">Datos usuario</Link>
          </li>
          <li>
            <Link to="/home/calificaciones">Calificaciones</Link>
          </li>
        </ul>
        <div class= "profile-content">
          <div class="user-zone">  
          </div>
          <div class="profile">
            <div class="profile-details">
              <img src={pic} alt="profile-img"></img>
              <div class = "name-prof">
                <div class= "name">{ username }</div>
                <div class= "prof">Profesor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-content">
        {comp}
      </div>
    </div>
  )
}

export default Home