import React from 'react'
import './foro.css'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa' 

const Discussion = () => {
    const style = {fontSize: "35px", margin: "0px"}
  return (
    <div className="home-content">
        <div className="home-back">
            <div className="home-header">
                <FaArrowCircleLeft className="icon" style= { style }></FaArrowCircleLeft>
                <h2>Foro General</h2>
                <div className="icon-container"> 
                    <FaPen className="icon" style={ style }></FaPen>
                </div>
            </div>
            <div className="foro-data">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi nam, dui lacinia cum bibendum erat himenaeos curae risus augue, phasellus ultrices enim quisque tincidunt ridiculus odio per. Condimentum vel convallis taciti penatibus nisi vestibulum iaculis, metus mollis praesent hendrerit augue posuere. Eu nisl orci commodo porttitor felis odio penatibus mollis justo in, vehicula malesuada lobortis posuere quisque nam diam porta augue, neque ut cursus aptent lacinia cras ornare dis at.</p> 
                <div className="data-bottom">
                    <button className="btn">Ver discusión</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discussion