import React, { useState } from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';

export default function Welcome() {
  const [username, setUsername ] = useState("")
  const [password, setPassword ] = useState("")

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
        window.location = "/home"
      }
    })
  }
  return (
    <div class= "container">
        <div class = "column">
            <h2>Iniciar Sesión</h2>
            <div class="form-container">
                <p class = "input-label" for="username">Nombre de Usuario</p>
                <input class = "form-input" type="text" id="username" name="username" onChange={(e) => { setUsername(e.target.value) }}></input><br></br>
                <p class = "input-label" for="username">Contraseña</p>
                <input class = "form-input" type="password" id="pass" name="pass" onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
                <button onClick={(e) => {checkData(); e.preventDefault()}} class = "form-button">ACCEDER</button>
            </div>
        </div>
        <div class = "column">
          <iframe class = "video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}
