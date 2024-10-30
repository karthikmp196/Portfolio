import React, { useContext, useState } from 'react'
import { Button, Container, Image, Nav, Navbar, ProgressBar } from 'react-bootstrap'
import Header from './Header'
import { DarkModeContext } from './color'


function Home() {
const {darkMode}=useContext(DarkModeContext)

  return (
   <div  style={{height:'100vh'}} id='main'  className={darkMode? 'About About-dark' : ' About About-light'} >
    
   

      <div >
          <section id='home'>
               <div id='home'>
                    <div id='Desc'>
                          <h3> Hi!!</h3>
                          <h2>Iam Karthik M P</h2>
                          I'm a passionate B.Tech graduate with a keen interest in crafting innovative web applications. My recent training in MERN stack development has equipped me with the skills to design, develop, and deploy robust and scalable web solutions, through my hands-on project experience
                       <br /><br /> <p> <a download href="./karthikmp.pdf">Download Resume</a></p>
                    </div>
         
                 
                  <div id='photo'>
                  {/* <img src="https://media.licdn.com/dms/image/v2/D4E03AQHtznCWxss-7A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727693166383?e=1735776000&v=beta&t=T1wK9jEtn3yeJRuFPoTZOT1s3BVqMXLaUK8oIAHcUS8" alt="image" Roundedcircle/> */}
                  <Image src="https://media.licdn.com/dms/image/v2/D4E03AQHtznCWxss-7A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727693166383?e=1735776000&v=beta&t=T1wK9jEtn3yeJRuFPoTZOT1s3BVqMXLaUK8oIAHcUS8" roundedCircle />
                  </div>
        
           </div>
           </section>
    
  
            
              
      
    
             
          </div>



   </div>
  )
}

export default Home
