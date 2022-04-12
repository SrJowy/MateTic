import React from 'react'
import { FaPen } from 'react-icons/fa'
import { FaArrowCircleLeft } from 'react-icons/fa'
import './foro.css'
import pic from '../home/resources/profile-photo.png'
import { Link, useNavigate } from 'react-router-dom'

const Foro = () => {
    const style = {fontSize: "35px", margin: "0px"}
    const navigate = useNavigate()

    const returnPage = () => navigate("/home")

    const writeEntry = () => navigate("/home/foroGeneral/escribir")

  return (
    <div className="home-content">
        <div className="home-back">
            <div className="home-header">
            <FaArrowCircleLeft onClick= { returnPage } className="icon" style= { style }></FaArrowCircleLeft>
                <h2>Foro General</h2>
                <div className="icon-container"> 
                    <FaPen onClick={ writeEntry } className='icon' style={ style }></FaPen>
                </div>
            </div>
            <div className="foro-data">
                <div className="column-user">
                    <img src={pic} alt="profile-img" className="photo-user"></img>
                    <h4>ElPanda</h4>
                </div>
                <div className="info">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi nam, dui lacinia cum bibendum erat himenaeos curae risus augue, phasellus ultrices enim quisque tincidunt ridiculus odio per. Condimentum vel convallis taciti penatibus nisi vestibulum iaculis, metus mollis praesent hendrerit augue posuere. Eu nisl orci commodo porttitor felis odio penatibus mollis justo in, vehicula malesuada lobortis posuere quisque nam diam porta augue, neque ut cursus aptent lacinia cras ornare dis at.</p> 
                    <div className="data-bottom">
                        <Link className="btn" to="/home/foroGeneral/discussion">Ver discusión</Link>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Foro