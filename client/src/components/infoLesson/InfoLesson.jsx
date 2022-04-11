import React from 'react'
import './infoLesson.css'
import { Link } from 'react-router-dom'

function InfoLesson() {
  return (
    <div>
        <div class="info-course">
            <h2 class= "subtitle">Funciones elementales</h2>
            <p class="subject-s">&gt; Funciones polinómicas</p>
            <h2 class="subject-activable">Funciones racionales</h2>
            <h2 class="subject-activable">Funciones exponenciales y logarítmicas</h2>
            <h2 class="subject-activable">Funciones trigonométricas</h2>
        </div>
        <div className="comp-ex">
            <div className="container-ejs form-ej">
                <div className="head-bar">
                    <h2>TEORÍA</h2>
                    <Link className="btn" to="/home/mateDBH4/funcionesForo">FORO DEL TEMA</Link>
                </div>
                <div className="par">
                    <h3 className="title">¿QUÉ ES UNA FUNCIÓN?</h3>
                    <p>Una función es una correspondencia entre dos puntos tal que cada elemento del conjunto incial le correponde como máximo <b>un único valor</b> del conjunto final.</p>
                    <p>La <b>variables independiente, x,</b> la forman los valores del conjunto inicial que se fijan previamente.</p>
                    <p>La <b>variables dependiente, y,</b> la forman los valores del conjunto final que se obtienen al aplicar la función a la variable dependiente.</p>
                </div>
                <div className="footer">
                    <Link className="btn" to="/home/mateDBH4/funcPolinomicas/ejercicios">EJERCICIOS</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoLesson