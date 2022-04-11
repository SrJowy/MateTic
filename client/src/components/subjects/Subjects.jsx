import React from 'react'
import { CgMathDivide } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import './subjects.css'

function Subjects() {
    const style = {fontSize: "35px"}


    function showBlocks() {
        const target = document.getElementById("space");
        if (target.style.display !== "none") {
            target.style.display = "none";
        } else {
            target.style.display = "block";
        }
    }

  return (
    <div>
        <h2 className="page-title">INICIO</h2>
            <span className="card" style={{"display": "block"}} onClick={showBlocks}>
                <div className ="courses">
                    <div class = "course-button">
                    <CgMathDivide style={ style }/>
                    <div className="break"></div>
                    <h4>MATEMÁTICAS</h4>
                    <div className="break"></div>
                    <p>DBH 4</p>
                    </div>
                </div>
            </span>
            <div id = "space" class = "space" style= {{"display": "none"}}>
                <div className = "container-adapted">
                    <h2 class="block-title">1. Números y álgebra</h2>
                    <h2 class="block-title">2. Geometría</h2>
                    <Link class = "block-title-activable" to="/home/mateDBH4/">3. Funciones</Link>
                    <h2 class="block-title">4. Estadística y probabilidad</h2>
                </div>
            </div>
    </div>
  )
}

export default Subjects