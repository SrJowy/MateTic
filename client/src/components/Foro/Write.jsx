import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';

const Write = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const title = location.state.userTitle;
  const foroName = location.state.foroName;
  const new_discussion = location.state.new;
  let discussion_title = "";

  if (!new_discussion) {
    discussion_title = location.state.title;
  }

  const [text, setText] = useState("");
  const [discTitle, setDiscTitle] = useState("");

  const send = () => {
    if (new_discussion) {
      const cookies = new Cookies();
      const userData = cookies.get('username');
      Axios.post("http://localhost:5000/api/sendNewDiscussion", {
        discussionTitle: discTitle,
        discussionText: text,
        foro: foroName,
        name: userData[0]
      }).then(response => {
        alert(response.data["text"])
        navigate("/home/foroGeneral/", {state:{foro: foroName}})
      })
    } else if (!new_discussion) {
      const cookies = new Cookies();
      const userData = cookies.get('username');
      Axios.post("http://localhost:5000/api/sendNewEntry", {
        discussionText: text,
        disc_title: discussion_title,
        name: userData[0]
      }).then(response => {
        alert(response.data["text"])
        navigate("/home/foroGeneral/discussion", {state:{title: discussion_title, message: location.state.message, user: location.state.user, foro: foroName}})
      })
    }
    
  }

  return (
    <div className="home-content">
      <div className="home-back">
        <div className="home-header">
            <h2>{ title }</h2>
        </div>
          <div className="discussion-title">
            <p>Título de la discusión:</p>
            { new_discussion ? <input className = "form-input" type="text" id="title" name="title" onChange={(e) => { setDiscTitle(e.target.value) }}/> : discussion_title }
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