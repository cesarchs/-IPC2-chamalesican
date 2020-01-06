import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//todos los componentes deben tener la primera letra de su nombre en mayuscula
function MenuDashboard(){
   return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">coecys 2020</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="mr-auto">
              <Nav.Link href="#deets"> About us </Nav.Link>
              <Nav.Link href="#features">Calendario</Nav.Link> 
              <Nav.Link eventKey={2} href="https://www.guatemala.com/">  Guatemala </Nav.Link>
                    </Nav>

          <Nav>
          <Nav.Link href="/"> LOG OUT </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default MenuDashboard