import React from 'react'
import './Navbar.css';
import {Nav,Navbar,Container} from 'react-bootstrap';
import logo from './../../images/logo.png'


const Navs = ()=> {
  return (
    <>
    <Navbar  expand="lg">
  <Container>
  <Navbar.Brand href="#home">
    <img src={logo} title='logo' />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#header">Home</Nav.Link>
      <Nav.Link href="#number">About Us</Nav.Link>
      <Nav.Link href="#ingridents">Explore Food</Nav.Link>
      <Nav.Link href="#slider">Reviews</Nav.Link>
      <Nav.Link href="#footer">FAQ</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link id='lastnav'>247833849</Nav.Link>
    </Nav>


  </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}
export default Navs;