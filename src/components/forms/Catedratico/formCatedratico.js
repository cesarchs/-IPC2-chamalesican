import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormCatedratico =({ handleSubmit,handleChange,form,titulo,boton})=>(
            <Form onSubmit={handleSubmit} className="container col-md-4 text-cente">
             <h2>{titulo}</h2>

            <Form.Group  controlId="formGridregistro">
                <Form.Label>Registro personal</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.registro } name="registro"  placeholder="ingrese su registro personal" />
              </Form.Group>

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

            <Form.Group  controlId="formGridcorreo">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.correo } name="correo" type="email" placeholder="ingrese su correo" />
              </Form.Group>

              
            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>univerdidad</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.universidad } name="universidad"  placeholder="ingrese su universidad" />
              </Form.Group>
              
 
            <Form.Group  controlId="formGridnickname">
                <Form.Label>nickname</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.nickname } name="nickname"  placeholder="ingrese su nickname" />
              </Form.Group>
 
            <Form.Group  controlId="formGridcontrasena">
                <Form.Label>contraseña</Form.Label>
                <Form.Control onChange = { handleChange } value = { form.contrasena } name="contrasena"  placeholder="ingrese su contraseña" />
              </Form.Group>

            <Button variant="primary" type="submit">
            {boton}
          </Button> 
        </Form>
)
export default FormCatedratico;