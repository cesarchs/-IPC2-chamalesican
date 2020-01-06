import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//todos los componentes deben tener la primera letra de su nombre en mayuscula
function MenuAdmin(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"> ADMINISTRADOR coecys 2020</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavDropdown title="AGREGAR USUARIO" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Addcatedratico">catedratico</NavDropdown.Item>
              <NavDropdown.Item href="/Addestudiante">estudiante</NavDropdown.Item>
              <NavDropdown.Item href="/Addcolaborador">colaborador</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Addadministrador">administrador</NavDropdown.Item>
            </NavDropdown>
            <Nav>
            <NavDropdown title="CRUD USUARIO" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/listadoCatedraticos">catedratico</NavDropdown.Item>
              <NavDropdown.Item href="/listadoEstudiantes">estudiante</NavDropdown.Item>
              <NavDropdown.Item href="/listadoColaboradores">colaborador</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/listadoAdmins">administrador</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Nav>     
          <Nav>
            <NavDropdown title="CRUD OTROS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/AddCurso">curso</NavDropdown.Item>
              <NavDropdown.Item href="/listadoCursos">eliminar y modificar CURSO</NavDropdown.Item>
              <NavDropdown.Item href="/AddBien">Bienes</NavDropdown.Item>
              <NavDropdown.Item href="/listadoBienes">eliminar y modificar BIENES</NavDropdown.Item>
              <NavDropdown.Item href="/AddActividad">Actividades</NavDropdown.Item>
              <NavDropdown.Item href="/listadoActividades">eliminar y modificar ACTIVIDADES</NavDropdown.Item>
              <NavDropdown.Item href="/crearnoticias">noticia</NavDropdown.Item>
              <NavDropdown.Item href="/AddPago">pagos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        <Nav className="mr-auto">
        <Nav.Link href="#pricing">about us</Nav.Link>
        <Nav.Link href="/dashBoard">Dashboard</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        <Nav.Link href="/"> LOG OUT</Nav.Link>
      </Navbar>
    )
}
export default MenuAdmin