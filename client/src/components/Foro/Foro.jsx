import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaArrowCircleLeft } from 'react-icons/fa'
import './foro.css'
import pic from '../home/resources/profile-photo.png'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import Axios from 'axios'

const Foro = () => {
    const style = {fontSize: "35px", margin: "0px"}
    const location = useLocation();
    const name = location.state.foro;
    const [dataList, setDataList] = useState([]);
    const [data, setData] = useState(false);
    const navigate = useNavigate()

    const returnPage = () => navigate("/home");

    const writeEntry = () => navigate("/home/foroGeneral/escribir", {state:{userTitle: "Nueva discusión", foroName: name, new: true}})
    
    useEffect(() => {
        const data = []
        Axios.post("http://localhost:5000/api/getEntries", {foro: name})
        .then(response => {
            for (var i = 0; i < Object.keys(response.data).length; i++) {
                const r = response.data[i];
                data.push(r);
            }
            setDataList(data);
            if (data.length !== 0) setData(true);
        });
    }, [name]);
  
    return (
    <div className="home-content">
        <div className="home-back">
            <div className="home-header">
            <FaArrowCircleLeft onClick= { returnPage } className="icon" style= { style }></FaArrowCircleLeft>
                <h2>{ name }</h2>
                <div className="icon-container"> 
                    <FaPen onClick={ writeEntry } className='icon' style={ style }></FaPen>
                </div>
            </div>
            {data ? dataList.map((val) => {
                return <div key = {Math.random().toString(36).slice(-8)} className="foro-data">
                    <div className="column-user">
                        <img src={pic} alt="profile-img" className="photo-user"></img>
                        <h4> { val.correo } </h4>
                    </div>
                    <div className="info">
                        <h3> { val.titulo } </h3>
                        <p> { val.mensaje } </p> 
                        <div className="data-bottom">
                            <Link className="btn" to="/home/foroGeneral/discussion" state={ {title: val.titulo, message: val.mensaje, user: val.correo, foro: name} }>Ver discusión</Link>   
                        </div>
                    </div>
                </div>
            }) : <h3 className="ctr">No hay entradas en el foro</h3>}
            
        </div>
    </div>
  )
}

export default Foro