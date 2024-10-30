import React, { useContext } from 'react'
import { DarkModeContext } from './color'

function Contacts() {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <div  id='sections'  className={darkMode? 'About About-dark' : ' About About-light'}>
       <h2 >Contact Me</h2>
                  <i id='icon' class="fa-solid fa-phone"></i>9074526723 <br /> <br /> 
                  <i id='icon' class="fa-solid fa-envelope"></i>karthikmp196@gmail.com <br /> <br /> 
                  <i id='icon' class="fa-brands fa-linkedin"></i><a href='http://www.linkedin.com/in/karthikmp196'>http://www.linkedin.com/in/karthikmp196</a> <br /> <br /> 
                  <i id='icon' class="fa-brands fa-github"></i><a href='https://github.com/karthikmp196'>https://github.com/karthikmp196</a> <br /> <br />
    </div>
  )
}

export default Contacts
