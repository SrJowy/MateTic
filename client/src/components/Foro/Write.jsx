import React, { useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';

const Write = (data) => {
  const navigate = useNavigate();
  const style = {fontSize: "35px", margin: "0px"};

  const location = useLocation();
  const title = location.state.userTitle
  const foroName = location.state.foroName

  const returnPage = () => navigate("/home/foroGeneral");

  const [text, setText] = useState("");
  const [discTitle, setDiscTitle] = useState("");

  const send = () => {
    const cookies = new Cookies();
    const username = cookies.get('username');
    Axios.post("http://localhost:5000/api/sendNewDiscussion", {
      discussionTitle: discTitle,
      discussionText: text,
      foro: foroName,
      name: username
    }).then(response => {
      alert(response.data["text"])
      navigate("/home/foroGeneral")
    })
  }

  return (
    <div className="home-content">
      <div className="home-back">
        <div className="home-header">
        <FaArrowCircleLeft onClick= { returnPage } className="icon" style= { style }></FaArrowCircleLeft>
            <h2>{ title }</h2>
        </div>
          <div className="discussion-title">
            <p>Título de la discusión:</p>
            <input className = "form-input" type="text" id="title" name="title" onChange={(e) => { setDiscTitle(e.target.value) }}/>
          </div>
          <div className="message-div">
            <p>Pregunta:</p>
            <textarea className="textbox" id="message" name="message" rows="25" cols="60" onChange={(e) => { setText(e.target.value) }}/>
          </div>
          <button onClick = { send } className='btn'>Enviar</button>
        </div>
    </div>
  )
}

export default Write