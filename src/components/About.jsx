import React, { useContext } from 'react'
import { DarkModeContext } from './color'

function About() {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <div id='sections'  className={darkMode? 'About About-dark' : ' About About-light'} >
      
        <h2>About me</h2>
        An eager learner having experience  in MongoDB, Express.js, React.js, and Node.js, with a strong
 understanding of JavaScript and its ecosystem. Skilled in designing and implementing robust front-end and
 back-end solutions, leveraging modern development methodologies and best practices. Passionate about
 creating innovative and user-centric digital experiences.
 <br />
 <br />
 I've honed my abilities in,
<ul>
  
<li>
    Frontend Development: Building visually appealing and user-friendly interfaces using React.js.
  
</li>  
<li>
  Backend Development: Constructing efficient and secure server-side logic with Node.js and Express.js.
  
</li> 
<li>
   Database Management: Effectively storing and retrieving data using MongoDB.
  
</li>  
</ul>
I'm eager to contribute my technical expertise to a dynamic team and work on challenging projects that push the boundaries of web development.

    </div>
  )
}

export default About
