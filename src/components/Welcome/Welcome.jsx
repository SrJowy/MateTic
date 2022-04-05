import React from 'react'

export default function Welcome() {
  return (
    <div class= "container">
        <div class = "column">
            <h2>Iniciar Sesión</h2>
            <div class="form-container">
                <form method='POST'>
                    <p class = "input-label" for="username">Nombre de Usuario</p>
                    <input class = "form-input" type="text" id="username" name="username"></input><br></br>
                    <p class = "input-label" for="username">Contraseña</p>
                    <input class = "form-input" type="password" id="pass" name="pass"></input><br></br>
                    <button class = "form-button">ACCEDER</button>
                </form>
            </div>
        </div>
        <div class = "column">
          <iframe class = "video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}
