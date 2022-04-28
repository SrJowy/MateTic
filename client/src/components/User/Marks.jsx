import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import Axios from 'axios';

const Marks = () => {

  const c = new Cookies();
  const cookie = c.get("username");
  const email = cookie[0];

  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [];
    Axios.post("http://localhost:5000/api/getMarks", {mail: email})
    .then(res => {
        for (var i = 0; i < Object.keys(res.data).length; i++) {
          const r = res.data[i];
          dataArray.push(r);
        }
        setData(dataArray);
    })
  }, [email])
  return (
    <div className="home-content">
        <div className="home-back">
            <div className="home-header">
                <h2>Historial de ejercicios</h2>
            </div>
            {data.map((val) => {
              return <div  key={Math.random().toString(36).slice(-8)} className="table">
                <ul>
                  <li> {val.apartado} : {val.correcto.data[0] ? "REALIZADO CORRECTAMENTE" : "REALIZADO INCORRECTAMENTE"} ({val.fecha_hora.substring(0,10)}) </li>
                </ul>
              </div>
            })}
        </div>
    </div>
  )
}

export default Marks