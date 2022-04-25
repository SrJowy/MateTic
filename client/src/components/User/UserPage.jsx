import React from 'react'
import img from '../home/resources/profile-photo.png'
import school from './resources/school.png'
import './user.css'

const UserPage = () => {
  return (
    <div className="home-content">
        <div className="home-back">
          <div className="home-header">
              <h2>Datos del usuario</h2>
          </div>
          <div className="user-data">
            <div className="user-photo">
              <img src= { img } alt="img-p" />
            </div>
            <div className="user-mail-name">
              <h3>NOMBRE</h3>
              <h4>name@mail.com</h4>
            </div>
            <div className="user-school">
              <h3>Colegio Lorem ipsum</h3>
              <div className="school-photo">
                <img src= { school } alt="img-s" />
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="option-user">
              <p>Cambiar correo:</p>
              <input className = "form-input" type="email" id="mail" name="mail" />
              <button className = "btn">Cambiar</button>
            </div>
            <div className="option-user">
              <p>Cambiar contraseña:</p>
              <input className = "form-input" type="email" id="mail" name="mail" />
              <button className = "btn">Cambiar</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserPage