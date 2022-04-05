import React from 'react'
import './ejercicios.css'

export default function Ejercicios() {

    function checkAnswers() {
        console.log('hey')
    }

  return (
    <div className = "container-ejs">
        <h2>Ejercicios</h2>
        <div className="form-ej">
            <h3>Funciones polinómicas</h3>
            <form>
                <div className = "pregunta">
                    <p>1. Indica la pendiente de la siguiente función: y = 3x+2</p> 
                    <div class ="option"><input type ="radio" name="o11" value="-2" /> -2</div>
                    <div class ="option"><input type ="radio" name="o12" value="3" /> 3</div>
                    <div class ="option"><input type ="radio" name="o13" value="1/2" /> 1/2</div>
                </div>
                <div className = "pregunta">
                    <p>2. La función f(x) = 3x<sup>2</sup>+2 es:</p>
                    <div class ="option"><input type ="radio" name="o21" value="lineal" /> Lineal</div>
                    <div class ="option"><input type ="radio" name="o22" value="cuadrática" /> Cuadrática completa</div>
                    <div class ="option"><input type ="radio" name="o23" value="" /> Cuadrática sin el término x</div>
                    <div class ="option"><input type ="radio" name="o24" value="no" /> Ninguna de las anteriores</div>
                    
                </div>
                <div className = "pregunta">
                    <p>3. ¿Dónde está el vértice en la función 3x<sup>2</sup> -3? </p> 
                    <div class ="option"><input type ="radio" name="o31" value="02" /> (0,2)</div>
                    <div class ="option"><input type ="radio" name="o32" value="20" /> (2,0)</div>
                    <div class ="option"><input type ="radio" name="o33" value="00" /> (0,0)</div>
                    <div class ="option"><input type ="radio" name="o34" value="no" /> Ninguna de las anteriores</div>
                </div>
                <div className = "pregunta">
                    <p>4. Encuentra el/los punto(s) de corte de la función 5x<sup>3</sup>-5x<sup>2</sup> (Pueden ser más de uno)</p> 
                    <div class ="option"><input type ="checkbox" name="o41" value="00" /> (0,0)</div>
                    <div class ="option"><input type ="checkbox" name="o42" value="-10" /> (-1,0)</div>
                    <div class ="option"><input type ="checkbox" name="o43" value="10" /> (1,0)</div>
                    <div class ="option"><input type ="checkbox" name="o44" value="0-1" /> (0,-1)</div>
                </div>
                <div className = "pregunta">
                    <p>5. Halla una función cuadrática que contenga los puntos:</p>
                    <p>A = (2,0)</p>
                    <p>B = (4,0)</p>
                    <div className="respuestas">
                        <div class ="option"><input type ="radio" name="o51" value="f1" /> f(x) = x<sup>2</sup>-6x+8</div>
                        <div class ="option"><input type ="radio" name="o52" value="f2" /> f(x) = x<sup>2</sup>-12+4</div>
                        <div class ="option"><input type ="radio" name="o53" value="f3" /> f(x) = x<sup>3</sup>+4x<sup>2</sup>+x+2</div>
                        <div class ="option"><input type ="radio" name="o54" value="f4" /> Ninguna de las anteriores</div>
                    </div>
                </div>
                <div className = "pregunta">
                    <p>6. ¿Qué función polinomial tiene como raíces -2, 3, -1, 4, 6?</p> 
                    <div class ="option"><input type ="radio" name="o61" value="f1" /> f(x) = (x-2)(x-3)(x-1)(x-4)(x-6)</div>
                    <div class ="option"><input type ="radio" name="o62" value="f2" /> f(x) = 2(x+2)(x+3)(x+1)(x+4)(x+6)</div>
                    <div class ="option"><input type ="radio" name="o63" value="f3" /> f(x) = (x-2)(x+3)(x-1)(x+4)(x+6)</div>
                    <div class ="option"><input type ="radio" name="o64" value="f4" /> f(x) = 2(x+2)(x-3)(x+1)(x-4)(x-6)</div>
                </div>
                <button onClick={(e) => {checkAnswers(); e.preventDefault()}}>ENVIAR</button>
            </form>
        </div>
    </div>
    
  )
}

