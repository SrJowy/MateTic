import React from 'react'
import { Link } from 'react-router-dom'

function Lessons() {
  const unitFe = "Funciones Elementales";
  const unitF = "Funciones";
  const lesson91 = "Funciones polinomicas";
  return (
    <div className="home-content">
      <div className ="math-content">
          <div className="container-block">
            <h2 className="subject-title">FUNCIONES</h2>
            <h3 className="subtitle">8. Funciones</h3>
              <h2 className="subject-activable">Correspondencias y funciones</h2>
              <h2 className="subject-activable">Dominio y recorrido</h2>
              <h2 className="subject-activable">Operaciones con funciones</h2>
              <h2 className="subject-activable">Composición de funciones</h2>
              <h2 className="subject-activable">Función inversa</h2>
              <h2 className="subject-activable">Puntos de coste con los ejes</h2>
              <h2 className="subject-activable">Simetría de una función</h2>
              <h2 className="subject-activable">Periodicidad de una función</h2>
              <h2 className="subject-activable">Continuidad</h2>
              <h2 className="subject-activable">Crecimiento y decrecimiento</h2>
              <h2 className="subject-activable">Acotación y asíntotas</h2>
          </div>
          <div className="container-block">
          <h3 className="subtitle">9. Funciones elementales</h3>
              <div className="subject-activable">
                  <Link to="/home/mateDBH4/funcPolinomicas" state={{title: unitFe, lesson: lesson91}}>Funciones polinómicas</Link>
              </div>
              <h2 className="subject-activable">Funciones racionales</h2>
              <h2 className="subject-activable">Funciones exponenciales y logarítmicas</h2>
              <h2 className="subject-activable">Funciones trigonométricas</h2>
          </div>
          <div className="container-block">
          <h3 className="subtitle">10. Introducción al concepto límite</h3>
              <h2 className="subject">Límite de una función en un punto</h2>
              <h2 className="subject">Propiedades de los límites finitos. Indeterminaciones</h2>
              <h2 className="subject">Propiedades de los límites infinitos. Indeterminaciones</h2>
              <h2 className="subject">Propiedades de los límites infinitos. Indeterminaciones</h2>
              <h2 className="subject">Límites y continuidad</h2>
              <h2 className="subject">Sucesiones y límites de sucesiones</h2>
              <h2 className="subject">El número e</h2>
          </div>
          <div className="container-block">
          <h3 className="subtitle">11. Introducción al concepto de derivada</h3>
              <h2 className="subject">Tasas de variación</h2>
              <h2 className="subject">Interpretación geométrica de la derivada. Ecuación de la recta tangente.</h2>
              <h2 className="subject">Función derivada. Derivada de las funciones elementales</h2>
              <h2 className="subject">Derivada de las operaciones con funciones</h2>
              <h2 className="subject">Derivada de la función compuesta</h2>
              <h2 className="subject">Aplicaciones de las derivadas en diferentes campos</h2>
          </div>
          
            <div className="comp-ex">

            </div>
      </div>
    </div>
  )
}

export default Lessons