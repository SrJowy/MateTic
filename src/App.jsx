import './App.css';
import Header from './components/header/Header'
import Welcome from './components/Welcome/Welcome'
import Home from './components/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ejercicios from './components/ejercicios/Ejercicios';
import Subjects from './components/subjects/Subjects';
import Lessons from './components/Lessons/Lessons';

export function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element = { <div><Header /><Welcome /></div> } />
          <Route path="/home" element= { Home(<Subjects/>) } />
          <Route path="/home/mateDBH4" element = {Home(<Lessons/>)} />
          <Route path="/home/mateDBH4/ej-func-pol" element = { Home(<Ejercicios/>)} />
        </Routes>
    </BrowserRouter>
    
    )
}

