import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormEstudiante = ({ handleSubmit,handleChange,form,titulo,boton}) => (
    <Form onSubmit={handleSubmit} className="container col-md-4 text-cente">
              <h2>{titulo}</h2>

            <Form.Row>
            <Form.Group  controlId="formGridcarnet">
                <Form.Label>carnet</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.carnet } name="carnet"  placeholder="ingrese carnet" />
              </Form.Group>
              </Form.Row>

            <Form.Row>
              <Form.Group  controlId="formGridNombre">
                <Form.Label>nombre</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.nombre } name="nombre" placeholder="ingrese nombre" />
              </Form.Group>
          
              <Form.Group  controlId="formGridNacimiento">
                <Form.Label>fecha de nacimiento</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.nacimiento } name="nacimiento" placeholder="fecha de nacimiento" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group  controlId="formGridtelefono">
                <Form.Label>telefono</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.telefono } name="telefono"  placeholder="ingrese telefono" />
              </Form.Group>
              </Form.Row>

            <Form.Group  controlId="formGridcorreo">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.correo } name="correo" type="email" placeholder="ingrese su correo" />
              </Form.Group>

            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>univerdidad</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.universidad } name="universidad"  placeholder="ingrese su universidad" />
              </Form.Group>

              <Form.Row>
            <Form.Group  controlId="formGridnacionalidad">
                <Form.Label>nacionalidad</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.nacionalidad } name="nacionalidad"  placeholder="ingrese su nacionalidad" />
              </Form.Group>

            <Form.Group  controlId="formGridnickname">
                <Form.Label>nickname</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.nickname } name="nickname"  placeholder="ingrese su nickname" />
              </Form.Group>
              </Form.Row>

             <Form.Row>
            <Form.Group  controlId="formGridcontrasena">
                <Form.Label>contraseña</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.contrasena } name="contrasena"  placeholder="ingrese su contraseña" />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
            {boton}
          </Button> 
        </Form>
   
)   
export default FormEstudiante;