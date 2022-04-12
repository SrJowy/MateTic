import React, { useState } from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const [username, setUsername ] = useState("")
  const [password, setPassword ] = useState("")
  const navigate = useNavigate();

  const checkData = () => {
    Axios.post("http://localhost:5000/api/checkData", {
      userName: username,
      pass: password
    }).then(response => {
      if (response.data === true) {
        const cookies = new Cookies();
        if(!cookies.get('username')) {
          cookies.set('username', username, {path: '/'});
        }
        navigate("/home")
      }
    })
  }
  return (
    <div className= "container">
        <div className = "column">
            <h2>Iniciar Sesión</h2>
            <div className="form-container">
                <p className = "input-label" for="username">Nombre de Usuario</p>
                <input className = "form-input" type="text" id="username" name="username" onChange={(e) => { setUsername(e.target.value) }}></input><br></br>
                <p className = "input-label" for="username">Contraseña</p>
                <input className = "form-input" type="password" id="pass" name="pass" onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
                <button onClick={(e) => {checkData(); e.preventDefault()}} className = "form-button">ACCEDER</button>
            </div>
        </div>
        <div className = "column">
          <iframe className = "video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}
