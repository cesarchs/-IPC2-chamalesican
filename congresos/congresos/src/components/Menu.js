import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//todos los componentes deben tener la primera letra de su nombre en mayuscula
function Menu(){

 function alarma(){
   return alert("cesar leonel chamale sican ")
 }
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">coecys 2020</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="mr-auto">
              <Nav.Link href="#deets"> About us </Nav.Link>
              <Nav.Link href="#features">Calendario</Nav.Link>
              <Nav.Link href="#pricing">Noticias</Nav.Link> 
              <Nav.Link eventKey={2} href="https://www.guatemala.com/">  Guatemala </Nav.Link>
                    </Nav>

                    <Nav>
              <NavDropdown title="REGISTRARSE" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Addcatedratico">catedratico</NavDropdown.Item>
              <NavDropdown.Item href="/Addestudiante">estudiante</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="INICIO DE SESION" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Login">inicio de sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default Menu;