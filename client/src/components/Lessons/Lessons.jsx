import React from 'react'
import { Link } from 'react-router-dom'

function Lessons() {
  const unitFe = "Funciones Elementales";
  const unitF = "Funciones";
  const lesson91 = "Funciones polinomicas";
  const lesson92 = "Funciones racionales";
  const lesson93 = "Funciones exponenciales y logaritmicas";
  const lesson94 = "Funciones trigonometricas";
  const lesson82 = "Dominio y recorrido";
  const lesson81 = "Correspondencias y funciones";
  const lesson83 = "Operaciones con funciones";
  const lesson84 = "Composicion de funciones";
  const lesson85 = "Funcion inversa";
  const lesson86 = "Puntos de corte con los ejes";
  const lesson87 = "Simetria de una funcion";
  const lesson88 = "Periodicidad de una funcion";
  const lesson89 = "Continuidad";
  const lesson810 = "Crecimiento y decrecimiento";
  const lesson811 = "Acotacion y asintotas";
  return (
    <div className="home-content">
      <div className ="math-content">
          <div className="container-block">
            <h2 className="subject-title">FUNCIONES</h2>
            <h3 className="subtitle">8. Funciones</h3>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson81}}>Correspondencias y funciones</Link>
              </div>  
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson82}} >Dominio y recorrido</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson83}} >Operaciones con funciones</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson84}} >Composición de funciones</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson85}} >Función inversa</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson86}} >Puntos de corte con los ejes</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson87}} >Simetría de una función</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson88}} >Periodicidad de una función</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson89}} >Continuidad</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson810}} >Crecimiento y decrecimiento</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitF, lesson: lesson811}} >Acotación y asíntotas</Link>
              </div>
          </div>
          <div className="container-block">
          <h3 className="subtitle">9. Funciones elementales</h3>
              <div className="subject-activable">
                  <Link to="/home/mateDBH4/teoria" state={{title: unitFe, lesson: lesson91}}>Funciones polinómicas</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitFe, lesson: lesson92}}>Funciones racionales</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitFe, lesson: lesson93}}>Funciones exponenciales y logarítmicas</Link>
              </div>
              <div className="subject-activable">
                <Link to="/home/mateDBH4/teoria" state={{title: unitFe, lesson: lesson94}}>Funciones trigonométricas</Link>
              </div>
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