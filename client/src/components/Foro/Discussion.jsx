import React, { useEffect, useState } from 'react'
import './foro.css'
import pic from '../home/resources/profile-photo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { FaArrowCircleLeft } from 'react-icons/fa'

const Discussion = () => {
    const style = {fontSize: "35px", margin: "0px"}
    const location = useLocation();
    const title = location.state.title;
    const message = location.state.message;
    const user = location.state.user;
    const foroName = location.state.foro;

    const [dataList, setDataList] = useState([]);

    const navigate = useNavigate();
    const returnPage = () => navigate("/home/foroGeneral", {state:{foro: foroName}});

    useEffect(() => {
        const data = [];
        Axios.post("http://localhost:5000/api/getResponses", {title: title})
        .then(response => {
            for (var i = 0; i < Object.keys(response.data).length; i++) {
                const r = response.data[i];
                data.push(r);
            }
            setDataList(data);
        });
    }, [title]);

  return (
    <div className="home-content">
        <div className="home-back">
            <div className="home-header">
            <FaArrowCircleLeft onClick= { returnPage } className="icon" style= { style }></FaArrowCircleLeft>
                <h2>Foro General</h2>
                <div className="icon-container"> 
                    <Link className="btn" to="/home/foroGeneral/escribir" state= {{userTitle: "Nueva entrada", foroName: foroName, title: title, message: message, user: user, new: false}} >Participar</Link>
                </div>
            </div>
            <div className="foro-data">
                <div className="column-user">
                    <img src={pic} alt="profile-img" className="photo-user"></img>
                    <h4>{ user }</h4>
                </div>
                <div className="info">
                    <h3>{ title }</h3>
                    <p>{ message }</p> 
                </div>
            </div>
            <div className="foro-responses">
                <h3>Respuestas</h3>
                {dataList.map((val) => {
                    return <div class="response">
                        <div className="column-user">
                            <img src={pic} alt="profile-img" className="photo-user"></img>
                            <h4> { val.correo }</h4>
                        </div>
                        <div className="info">
                            <p>{ val.mensaje }</p> 
                        </div>
                    </div>
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Discussion