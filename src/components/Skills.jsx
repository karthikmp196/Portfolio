import React, { useContext } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { DarkModeContext } from './color'

function Skills() {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <div id='sections'  className={darkMode? 'About About-dark' : ' About About-light'}>
       <h2>My Skills</h2>
                  <ul>
                    <li>HTML</li>  <ProgressBar style={{width:'30%'}} striped variant="info" now={95}></ProgressBar>
                    <li>Css</li> <ProgressBar style={{width:'30%'}} striped variant="info" now={90}></ProgressBar>
                    <li>React</li> <ProgressBar style={{width:'30%'}} striped variant="info" now={85}></ProgressBar>
                    <li>Mongodb</li> <ProgressBar style={{width:'30%'}} striped variant="info" now={80}></ProgressBar>
                    <li>Node.js</li> <ProgressBar style={{width:'30%'}} striped variant="info" now={60}></ProgressBar>
                    <li>Express.js</li> <ProgressBar style={{width:'30%'}} striped variant="info" now={50}></ProgressBar>

                    <li>Mysql</li> <ProgressBar style={{width:'30%'}} striped variant="info" now={70}></ProgressBar>
                    <li>Javascript</li> <ProgressBar style={{width:'30%'}} striped variant="info" now={75}></ProgressBar>
        
                  </ul>
    </div>
  )
}

export default Skills
