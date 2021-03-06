import React, { useState } from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import logo from './imgs/logoNegro.png'

export default function Welcome() {
  const [mail, setMail ] = useState("");
  const [password, setPassword ] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const checkData = () => {
    Axios.post("http://localhost:5000/api/checkData", {
      email: mail,
      pass: password
    }).then(response => {
      if (response.data["session"] === true) {
        const cookies = new Cookies();
        if(!cookies.get("username")) {
          const data = [response.data["email"], response.data["nomb"], response.data["rol"], response.data["col"]];
          cookies.set("username", data, {path: '/'});
        }
        setError(false)
        navigate("/home")
      } else if (response.data["session"] === false){
          setError(true)
      }
    })
  }
  return (
    <div className= "container">
        <div className = "column">
            <h2>Iniciar Sesión</h2>
            <div className="form-container">
                <p className = "input-label" htmlFor="mail">Nombre de Usuario</p>
                <input className = "form-input" type="text" id="mail" name="mail" onChange={(e) => { setMail(e.target.value) }}></input><br></br>
                <p className = "input-label" htmlFor="password">Contraseña</p>
                <input className = "form-input" type="password" id="pass" name="pass" onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
                <button onClick={(e) => {checkData(); e.preventDefault()}} className = "form-button">ACCEDER</button>
            </div>
            { error ? <p className="error-msg"> El usuario o contraseña son incorrectos</p> : null }
        </div>
        <div className = "column img-logo">
          <img src={logo} alt="l" />
        </div>
    </div>
  )
}
