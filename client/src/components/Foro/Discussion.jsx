import React from 'react'
import './foro.css'
import { FaArrowCircleLeft } from 'react-icons/fa'
import pic from '../home/resources/profile-photo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Discussion = () => {
    const navigate = useNavigate();
    const style = {fontSize: "35px", margin: "0px"};

    const returnPage = () => navigate("/home/foroGeneral")

  return (
    <div className="home-content">
        <div className="home-back">
            <div className="home-header">
                <FaArrowCircleLeft onClick={ returnPage } className="icon" style= { style }></FaArrowCircleLeft>
                <h2>Foro General</h2>
                <div className="icon-container"> 
                    <Link className="btn" to="/home/foroGeneral/escribir">Participar</Link>
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
                </div>
            </div>
            <div className="foro-responses">
                <h3>Respuestas</h3>
                <div class="response">
                    <div className="column-user">
                        <img src={pic} alt="profile-img" className="photo-user"></img>
                        <h4>Juanmi</h4>
                    </div>
                    <div className="info">
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi nam, dui lacinia cum bibendum erat himenaeos curae risus augue, phasellus ultrices enim quisque tincidunt ridiculus odio per. Condimentum vel convallis taciti penatibus nisi vestibulum iaculis, metus mollis praesent hendrerit augue posuere. Eu nisl orci commodo porttitor felis odio penatibus mollis justo in, vehicula malesuada lobortis posuere quisque nam diam porta augue, neque ut cursus aptent lacinia cras ornare dis at.</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discussion