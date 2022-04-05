import React from 'react'
import { Link } from 'react-router-dom'

function Lessons() {
  return (
    <div>
        <div class="info-course">
            <div class="subject">
                <Link to="/home/mateDBH4/ej-func-pol">Funciones polinómicas</Link>
            </div>
            <h2 class="subject">Funciones racionales</h2>
            <h2 class="subject">Funciones exponenciales y logarítmicas</h2>
            <h2 class="subject">Funciones trigonométricas</h2>
        </div>
          <div class="comp-ex">

          </div>
    </div>
  )
}

export default Lessons