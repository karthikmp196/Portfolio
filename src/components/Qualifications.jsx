import React, { useContext } from 'react'
import { DarkModeContext } from './color'

function Qualifications() {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <div id='sections'  className={darkMode? 'About About-dark' : ' About About-light'}>
       <h2>My Qualifications</h2>
        Btech -Sahrdaya College of Engineering and Technology,kodakara     <br />8.23 cgpa <br />2020-2024<br /><br />
        12th-ST Antony's HSS,Mala  <br />
        2018-2020 <br /> <br />
        10th-Vidhya Jyothi E.M.H.S,Aripalam <br />
        2018
    </div>
  )
}

export default Qualifications
