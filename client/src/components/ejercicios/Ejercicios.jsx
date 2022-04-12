import React from 'react'
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

  return (
    <div className="home-content">
        <div class="info-course">
            <h2 class= "subtitle">Funciones elementales</h2>
            <p class="subject-s">&gt; Funciones polinómicas</p>
            <h2 class="subject">Funciones racionales</h2>
            <h2 class="subject">Funciones exponenciales y logarítmicas</h2>
            <h2 class="subject">Funciones trigonométricas</h2>
        </div>
            <div class="comp-ex">
                <div className = "container-ejs">
                    <h2>Ejercicios</h2>
                    <div className="form-ej">
                        <h3>Funciones polinómicas</h3>
                        <form>
                            <div id = "p1" className = "pregunta">
                                <p>1. Indica la pendiente de la siguiente función: y = 3x+2</p> 
                                <div class ="option"><input type ="radio" name="o1" id="o11" value="-2" /> -2</div>
                                <div class ="option"><input type ="radio" name="o1" id="o12" value="3" /> 3</div>
                                <div class ="option"><input type ="radio" name="o1" id="o13" value="1/2" /> 1/2</div>
                            </div>
                            <div id = "p2" className = "pregunta">
                                <p>2. La función f(x) = 3x<sup>2</sup>+2 es:</p>
                                <div class ="option"><input type ="radio" name="o2" id="o21" value="lineal" /> Lineal</div>
                                <div class ="option"><input type ="radio" name="o2" id="o22" value="cuadratica" /> Cuadrática completa</div>
                                <div class ="option"><input type ="radio" name="o2" id="o23" value="cuadraticaNoX" /> Cuadrática sin el término x</div>
                                <div class ="option"><input type ="radio" name="o2" id="o24" value="no" /> Ninguna de las anteriores</div>
                                
                            </div>
                            <div id = "p3" className = "pregunta">
                                <p>3. ¿Dónde está el vértice en la función 3x<sup>2</sup> -3? </p> 
                                <div class ="option"><input type ="radio" name="o3" id="o31" value="02" /> (0,2)</div>
                                <div class ="option"><input type ="radio" name="o3" id="o32" value="20" /> (2,0)</div>
                                <div class ="option"><input type ="radio" name="o3" id="o33" value="00" /> (0,0)</div>
                                <div class ="option"><input type ="radio" name="o3" id="o34" value="no" /> Ninguna de las anteriores</div>
                            </div>
                            <div id = "p4" className = "pregunta">
                                <p>4. Encuentra el/los punto(s) de corte de la función 5x<sup>3</sup>-5x<sup>2</sup> (Pueden ser más de uno)</p> 
                                <div class ="option"><input type ="checkbox" name="o41" id="o41" value="00" /> (0,0)</div>
                                <div class ="option"><input type ="checkbox" name="o42" id="o42" value="-10" /> (-1,0)</div>
                                <div class ="option"><input type ="checkbox" name="o43" id="o43" value="10" /> (1,0)</div>
                                <div class ="option"><input type ="checkbox" name="o44" id="o44" value="0-1" /> (0,-1)</div>
                            </div>
                            <div id = "p5" className = "pregunta">
                                <p>5. Halla una función cuadrática que contenga los puntos:</p>
                                <p>A = (2,0)</p>
                                <p>B = (4,0)</p>
                                <div className="respuestas">
                                    <div class ="option"><input type ="radio" name="o5" id="o51" value="f1" /> f(x) = x<sup>2</sup>-6x+8</div>
                                    <div class ="option"><input type ="radio" name="o5" id="o52" value="f2" /> f(x) = x<sup>2</sup>-12+4</div>
                                    <div class ="option"><input type ="radio" name="o5" id="o53" value="f3" /> f(x) = x<sup>3</sup>+4x<sup>2</sup>+x+2</div>
                                    <div class ="option"><input type ="radio" name="o5" id="o54" value="f4" /> Ninguna de las anteriores</div>
                                </div>
                            </div>
                            <div id = "p6" className = "pregunta">
                                <p>6. ¿Qué función polinomial tiene como raíces -2, 3, -1, 4, 6?</p> 
                                <div class ="option"><input type ="radio" name="o6" id="o61" value="f1" /> f(x) = (x-2)(x-3)(x-1)(x-4)(x-6)</div>
                                <div class ="option"><input type ="radio" name="o6" id="o62" value="f2" /> f(x) = 2(x+2)(x+3)(x+1)(x+4)(x+6)</div>
                                <div class ="option"><input type ="radio" name="o6" id="o63" value="f3" /> f(x) = (x-2)(x+3)(x-1)(x+4)(x+6)</div>
                                <div class ="option"><input type ="radio" name="o6" id="o64" value="f4" /> f(x) = 2(x+2)(x-3)(x+1)(x-4)(x-6)</div>
                            </div>
                            <button class="form-button-correct" onClick={(e) => {checkAnswers(); e.preventDefault()}}>ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    
  )
}

