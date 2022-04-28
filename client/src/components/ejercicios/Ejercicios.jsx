import React, { useEffect, useState } from 'react'
import './ejercicios.css'
import Axios from 'axios'
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import Cookies from 'universal-cookie';

export default function Ejercicios() {
    const location = useLocation();
    const lesson = location.state.lesson;

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

  return (
    <div className="home-content">
        <div className="info-course">
            <h2 className= "subtitle">Funciones elementales</h2>
            <p className="subject-s">&gt; Funciones polinómicas</p>
            <h2 className="subject">Funciones racionales</h2>
            <h2 className="subject">Funciones exponenciales y logarítmicas</h2>
            <h2 className="subject">Funciones trigonométricas</h2>
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

