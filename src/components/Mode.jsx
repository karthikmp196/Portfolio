import React, { useContext } from 'react'
import { DarkModeContext } from './color';
import { Button } from 'react-bootstrap';

function Mode() {
    const {toggleDarkMode}=useContext(DarkModeContext)
const handleClick=()=>{
  toggleDarkMode();
}
  return (
    <div>
    <Button onClick={handleClick} style={{margin:'30%',width:'100%'}} variant="light"><i class="fa-solid fa-circle-half-stroke"></i></Button>

    </div>
  )
}

export default Mode
