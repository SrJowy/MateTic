import React, { useEffect, useState } from 'react'
import './ejercicios.css'
import Axios from 'axios'
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import Cookies from 'universal-cookie';
import img1 from './imgs/img1.png'
import img2 from './imgs/img2.png'
import img3 from './imgs/img3.png'
import img4 from './imgs/img4.png'
import img5 from './imgs/img5.png'
import img6 from './imgs/img6.png'
import img7 from './imgs/img7.png'
import img8 from './imgs/img8.png'
import img9 from './imgs/img9.png'

export default function Ejercicios() {
    const location = useLocation();
    const lesson = location.state.lesson;
    const foro = location.state.foro;
    const [, t,t2] = foro.split(" ")

    const [data, setData] = useState("<div></div>");
    const [idEj, setIdEj] = useState(0);

    const c = new Cookies();
    const cookie = c.get("username");

    function checkAnswers() {
        var toSendId = [];
        var toSendResponse = [];
        var responses = document.getElementsByTagName("input");
        var toSend = {};
        for (var i = 0, n=responses.length; i < n; i++) {
            if (responses[i].checked) {
                toSendId.push(responses[i].name);
                toSendResponse.push(responses[i].value);
            }
        }

        toSendId.forEach((element, index) =>{
            toSend[element] = toSendResponse[index];
        });
        Axios.post("http://localhost:5000/api/correctExercise", {lesson: lesson, responses: toSend, id: idEj, mail: cookie[0]})
        .then(res => {
            alert(res.data.message)
        });
    }

    useEffect(() => {
        if (lesson !== "Continuidad") {
            Axios.post("http://localhost:5000/api/getExercise", {lesson: lesson})
            .then(res => {
                setData(res.data[0].contenido)
                setIdEj(res.data[0].id_ejercicio)
            });
        } else {
            setIdEj(4);
        }
    }, [lesson]);

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } 
    
    useEffect(() => {
        const lessons = document.getElementsByClassName("subject");
        for (var i = 0, n=lessons.length; i < n; i++) {
            if (removeAccents(lessons[i].textContent) === lesson) {
                lessons[i].style.cssText += "font-weight: 600";
                lessons[i].textContent = "> " + lesson;
            }
        }
    }, [lesson])

  return (
    <div className="home-content">
        <div className="info-course">
            {t2 === undefined ? <h2 className= "subtitle">{t}</h2> : <h2 className= "subtitle">{t + " " + t2}</h2>}
            { t2 === undefined ? <div>
                <h2 className="subject">Correspondencias y funciones</h2>
                <h2 className="subject">Dominio y recorrido</h2>
                <h2 className="subject">Operaciones con funciones</h2>
                <h2 className="subject">Composición de funciones</h2>
                <h2 className="subject">Función inversa</h2>
                <h2 className="subject">Puntos de corte con los ejes</h2>
                <h2 className="subject">Simetría de una función</h2>
                <h2 className="subject">Periodicidad de una función</h2>
                <h2 className="subject">Continuidad</h2>
                <h2 className="subject">Crecimiento y decrecimiento</h2>
                <h2 className="subject">Acotación y asíntotas</h2>
                </div>: <div>
                <h2 className="subject">Funciones polinómicas</h2>
                <h2 className="subject">Funciones racionales</h2>
                <h2 className="subject">Funciones exponenciales y logarítmicas</h2>
                <h2 className="subject">Funciones trigonométricas</h2>
            </div>}
        </div>
            <div className="comp-ex">
                <div className = "container-ejs">
                    <h2>Ejercicios</h2>
                    <div className="form-ej">
                        <h3>{lesson}</h3>
                        <form>
                            { lesson === "Continuidad" ? <div><div id = "p1" className = "pregunta">
                                <p>1. ¿Cuál de las siguientes gráficas presenta continuidad?</p> 
                                <div className ="option"><input type ="radio" name="o1" id="o11" value="a" /> <img className="img-form" src={img1} alt="i1"/></div>
                                <div className ="option"><input type ="radio" name="o1" id="o12" value="b" /> <img className="img-form" src={img2} alt="i2"/></div>
                                <div className ="option"><input type ="radio" name="o1" id="o13" value="c" /> <img className="img-form" src={img3} alt="i3"/></div>
                            </div>
                            <div id = "p2" className = "pregunta">
                                <p>2. ¿Qué función NO es continua?</p>
                                <div className ="option"><input type ="radio" name="o2" id="o21" value="a" /> <img className="img-form" src={img4} alt="i4"/></div>
                                <div className ="option"><input type ="radio" name="o2" id="o22" value="b" /> <img className="img-form" src={img5} alt="i5"/></div>
                                <div className ="option"><input type ="radio" name="o2" id="o23" value="c" /> <img className="img-form" src={img6} alt="i6"/></div>
                                
                            </div>
                            <div id = "p3" className = "pregunta">
                                <p>3. ¿Qué función tiene un máximo?</p> 
                                <div className ="option"><input type ="radio" name="o3" id="o31" value="a" /> <img className="img-form" src={img7} alt="i7"/></div>
                                <div className ="option"><input type ="radio" name="o3" id="o32" value="b" /> <img className="img-form" src={img8} alt="i8"/></div>
                                <div className ="option"><input type ="radio" name="o3" id="o33" value="c" /> <img className="img-form" src={img9} alt="i9"/></div>
                            </div></div>: parse(data) }
                            <button className="form-button-correct" onClick={(e) => {checkAnswers(); e.preventDefault()}}>ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    
  )
}

