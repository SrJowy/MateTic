import React from 'react'
import { CgMathDivide } from 'react-icons/cg'
import { Link } from 'react-router-dom'

function Subjects() {
    const style = {fontSize: "35px"}
  return (
    <div>
        <h2 class="page-title">INICIO</h2>
        <Link to="/home/mateDBH4">
            <span className="card" style={{"display": "block"}}>
                <div class ="courses">
                    <div class = "course-button">
                    <CgMathDivide style={ style }/>
                    <div className="break"></div>
                    <h4>MATEMÁTICAS</h4>
                    <div className="break"></div>
                    <p>DBH 4</p>
                    </div>
                </div>
            </span>
        </Link>
    </div>
  )
}

export default Subjects