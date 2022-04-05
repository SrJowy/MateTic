import React from 'react'
import './home.css'
import 'boxicons';
import pic from './resources/profile-photo.png'
import {Link} from 'react-router-dom';

function Home (comp) {
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
            <Link to="/home/mateDBH4">MATEMÁTICAS DBH4</Link>
          </li>
        </ul>
        <div class= "profile-content">
          <div class="profile">
            <div class="profile-details">
              <img src={pic} alt="profile-img"></img>
              <div class = "name-prof">
                <div class= "name">Joel Bra</div>
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