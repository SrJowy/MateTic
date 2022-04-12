import Header from './components/header/Header'
import Welcome from './components/Welcome/Welcome'
import Home from './components/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ejercicios from './components/ejercicios/Ejercicios';
import Subjects from './components/subjects/Subjects';
import Lessons from './components/Lessons/Lessons';
import InfoLesson from './components/infoLesson/InfoLesson';
import React from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Foro from './components/Foro/Foro';
import Discussion from './components/Foro/Discussion';
import UserPage from './components/User/UserPage';

export function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element = { <div><Header /><Welcome /></div> } />
          <Route path="/home" element= { <PrivateRoute> <div><Home /><Subjects/></div> </PrivateRoute> } /> 
          <Route path="/home/user" element= { <PrivateRoute> <div><Home /><UserPage /></div></PrivateRoute>} />
          <Route path="/home/foroGeneral" element = {<PrivateRoute> <div> <Home /><Foro /></div></PrivateRoute>} />
          <Route path="/home/foroGeneral/discussion" element = {<PrivateRoute> <div> <Home /><Discussion /></div></PrivateRoute>} />
          <Route path="/home/mateDBH4" element = { <PrivateRoute> <div><Home /><Lessons /></div> </PrivateRoute>} />
          <Route path="/home/mateDBH4/funcPolinomicas" element = { <PrivateRoute><div><Home /> <InfoLesson /> </div> </PrivateRoute>} />
          <Route path="/home/mateDBH4/funcPolinomicas/ejercicios" element = { <PrivateRoute> <div><Home /><Ejercicios /></div></PrivateRoute>} />
        </Routes>
    </BrowserRouter>
    
    )
}

