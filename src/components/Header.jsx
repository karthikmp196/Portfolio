import React, { useContext, useState } from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Mode from './Mode'

function Header() {
  


   
  return (
    <div style={{width:'100%'}}>
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
       <Link style={{textDecoration:'none'}}  to={'/'} > <Navbar.Brand>PortFolio</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
           
          </Nav>
          <Nav>
           <Link className='link' to={'/About'} >About</Link>
           
           <Link className='link' to={'/Skills'} > Skills</Link>
            
            
            <Link className='link' to={'/Contact'} > Contact</Link>
            
            
             <Link className='link' to={'/Qualifications'} >Qualifications</Link>
            
            <Mode/>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
