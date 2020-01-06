import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

  const FormAdministrador =({handleSubmit,handleChange,form,titulo,boton})=>(
       
            <Form onSubmit={handleSubmit} className="container col-md-4 text-cente">
              <h2>{titulo}</h2>
            <Form.Row>
              <Form.Group  controlId="formGridNombre">
                <Form.Label>nombre</Form.Label>
                <Form.Control onChange = { handleChange } value = {form.nombre} name="nombre" placeholder="ingrese nombre" />
              </Form.Group>
          
              <Form.Group  controlId="formGridNacimiento">
                <Form.Label>fecha de nacimiento</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.nacimiento } name="nacimiento" placeholder="ingrese fecha de nacimiento" />
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

              <Form.Row>
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

              <Form.Group controlId="formGridpuesto">
                <Form.Label>puesto</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.puesto } name="puesto" placeholder="ingrese su puesto" />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
            {boton}
          </Button> 
        </Form>
  )
export default FormAdministrador