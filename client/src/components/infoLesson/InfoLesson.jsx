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
            <h2 className="subtitle">{ title }</h2>
            { title==="Funciones" ? <div>
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
            <div className="container-ejs form-ej">
                <div className="head-bar">
                    <h2>TEORÍA</h2>
                    <Link className="btn" to="/home/foroGeneral" state={{foro: "Foro " + title}}>FORO DEL TEMA</Link>
                </div>
                <div className="par">
                    {parse(data)}
                </div>
                <div className="footer">
                    <Link className="btn" to="/home/mateDBH4/teoria/ejercicios" state={{foro: "Foro " + title, lesson: lesson}}>EJERCICIOS</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoLesson