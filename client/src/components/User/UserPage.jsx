import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import img from '../home/resources/profile-photo.png'
import school from './resources/school.png'
import './user.css'
import Axios from 'axios';

const UserPage = () => {
  const cookies = new Cookies();
  const c = cookies.get("username");

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [newMail, setNewMail] = useState(c[0]);
  const [sendMail, setSendMail] = useState("");
  const [name, setName] = useState("");

  const updateEmail = () => {
    Axios.post("http://localhost:5000/api/setMail", { mail: mail, actMail: newMail })
    .then(response => {
        if (response.data["success"]) {
          c[0] = mail;
          cookies.remove("username", {path: '/'});
          cookies.set("username", c, {path: '/'});
          setNewMail(mail)
          alert(response.data["message"]);
        } else {
          alert(response.data["message"]);
        }
    });
  }

  const updatePassword = () => {
    Axios.post("http://localhost:5000/api/setPassword", { password : password, mail: newMail })
    .then(response => {
        alert(response.data["message"]);
    });
  }

  const sendEmail = () => {
    var password = Math.random().toString(36).slice(-8);
    Axios.post("http://localhost:5000/api/createUser", { mail: sendMail, name: name, password: password, colegio: c[3], rol: 1 })
    .then(response =>{
        alert(response.data["message"] + ". La contraseña es " + password);
    })
  }

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
              <h3>{ c[1] }</h3>
              <h4>{ newMail }</h4>
            </div>
            <div className="user-school">
              <h3>{ c[3] }</h3>
              <div className="school-photo">
                <img src= { school } alt="img-s" />
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="option-user margin-30">
              <p>Cambiar correo:</p>
              <input className = "form-input" type="email" id="mail" name="mail" onChange={(e) => setMail(e.target.value)}/>
              <button className = "btn" onClick={ updateEmail }>Cambiar</button>
            </div>
            <div className="option-user margin-30">
              <p>Cambiar contraseña:</p>
              <input className = "form-input" type="password" id="pass" name="pass" onChange={(e) => setPassword(e.target.value)}/>
              <button className = "btn" onClick={ updatePassword }>Cambiar</button>
            </div>
            {c[2] ? null : <div className="form-container">
              <h3>Añadir usuario</h3>
              <p>Para añadir un nuevo alumno introduce su correo electrónico y se generará una contraseña para él.</p>
              <div className="option-user margin-30">
                <p>Correo:</p>
                <input className = "form-input" type="email" id="send-mail" name="send-mail" onChange={(e) => setSendMail(e.target.value)}/>
              </div>
              <div className="option-user">
                <p>Nombre y apellidos:</p>
                <input className = "form-input" type="text" id="send-name" name="send-name" onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className= "btn-end">
                <button className = "btn" onClick={ sendEmail }>Enviar</button>
              </div>
            </div>  }
          </div>
          
        </div>
    </div>
  )
}

export default UserPage