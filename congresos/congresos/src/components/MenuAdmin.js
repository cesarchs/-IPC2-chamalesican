import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//todos los componentes deben tener la primera letra de su nombre en mayuscula
function MenuAdmin(){

 function alarma(){
   return alert("cesar leonel chamale sican ")
 }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"> ADMINISTRADOR coecys 2020</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavDropdown title="AGREGAR_USUARIO" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Addcatedratico">catedratico</NavDropdown.Item>
              <NavDropdown.Item href="/Addestudiante">estudiante</NavDropdown.Item>
              <NavDropdown.Item href="/Addcolaborador">colaborador</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Addadministrador">administrador</NavDropdown.Item>
            </NavDropdown>
          </Nav>     
          <Nav>
            <NavDropdown title="CREAR" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/crearcurso">curso</NavDropdown.Item>
              <NavDropdown.Item href="/crearnoticias">noticia</NavDropdown.Item>
              <NavDropdown.Item href="/creartarea">tareas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">about me</Nav.Link>
        <Nav.Link eventKey={2} href="https://www.guatemala.com/">Guatemala</Nav.Link>
        <Nav.Link href="/"> LOG OUT </Nav.Link>
        </Nav>
      </Navbar>
    )
}
export default MenuAdmin