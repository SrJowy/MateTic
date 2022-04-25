import React, { useEffect, useState } from 'react';
import './infoLesson.css';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import parse from 'html-react-parser';

function InfoLesson() {
    const location = useLocation();
    const title = location.state.title;
    const lesson = location.state.lesson;
    const [data, setData] = useState("<div></div>");
    
    useEffect(() => {
        Axios.post("http://localhost:5000/api/getInfoLesson", { title: title, lesson: lesson})
        .then(response => {
            setData(response.data[0].contenido);
        });
    }, [lesson, title]);

  return (
    <div className="home-content">
        <div className="info-course">
            <h2 className="subtitle">{ title }</h2>
            <p className="subject-s">&gt; Funciones polinómicas</p>
            <h2 className="subject-activable">Funciones racionales</h2>
            <h2 className="subject-activable">Funciones exponenciales y logarítmicas</h2>
            <h2 className="subject-activable">Funciones trigonométricas</h2>
        </div>
        <div className="comp-ex">
            <div className="container-ejs form-ej">
                <div className="head-bar">
                    <h2>TEORÍA</h2>
                    <Link className="btn" to="/home/foroGeneral" state={{foro: "Foro " + title}}>FORO DEL TEMA</Link>
                </div>
                <div className="par">
                    {parse(data)}
                </div>
                <div className="footer">
                    <Link className="btn" to="/home/mateDBH4/funcPolinomicas/ejercicios" state={{foro: "Foro " + title, lesson: lesson}}>EJERCICIOS</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoLesson