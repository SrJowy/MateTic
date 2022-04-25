import React, { useEffect } from 'react'
import './ejercicios.css'

export default function Ejercicios() {

    function checkAnswers() {
        if(document.getElementById("o12").checked &&
            document.getElementById("o23").checked &&
            document.getElementById("o31").checked &&
            document.getElementById("o41").checked &&
            document.getElementById("o43").checked &&
            document.getElementById("o51").checked &&
            document.getElementById("o64").checked) {
                alert("Has acertado todas")
        } else {
            alert("Hay errores, corrígelos")
        }
    }

    useEffect()

  return (
    <div className="home-content">
        <div className="info-course">
            <h2 className= "subtitle">Funciones elementales</h2>
            <p className="subject-s">&gt; Funciones polinómicas</p>
            <h2 className="subject">Funciones racionales</h2>
            <h2 className="subject">Funciones exponenciales y logarítmicas</h2>
            <h2 className="subject">Funciones trigonométricas</h2>
        </div>
            <div className="comp-ex">
                <div className = "container-ejs">
                    <h2>Ejercicios</h2>
                    <div className="form-ej">
                        <h3>Funciones polinómicas</h3>
                        <form>
                            
                            <button className="form-button-correct" onClick={(e) => {checkAnswers(); e.preventDefault()}}>ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    
  )
}

