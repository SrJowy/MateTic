import React, { useEffect, useState } from 'react'
import './ejercicios.css'
import Axios from 'axios'
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import Cookies from 'universal-cookie';

export default function Ejercicios() {
    const location = useLocation();
    const lesson = location.state.lesson;
    const foro = location.state.foro;
    const [, t] = foro.split(" ")

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
        Axios.post("http://localhost:5000/api/getExercise", {lesson: lesson})
        .then(res => {
            setData(res.data[0].contenido)
            setIdEj(res.data[0].id_ejercicio)
        });
    }, [lesson]);

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } 
    
    useEffect(() => {
        const lessons = document.getElementsByClassName("subject");
        for (var i = 0, n=lessons.length; i < n; i++) {
            if (removeAccents(lessons[i].textContent) === lesson) {
                lessons[i].style.cssText += "font-weight: 600";
            }
        }
    }, [lesson])

  return (
    <div className="home-content">
        <div className="info-course">
            <h2 className= "subtitle">{t}</h2>
            { t==="Funciones" ? <div>
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
                        <h3>Funciones polinómicas</h3>
                        <form>
                            { parse(data) }
                            <button className="form-button-correct" onClick={(e) => {checkAnswers(); e.preventDefault()}}>ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    
  )
}

