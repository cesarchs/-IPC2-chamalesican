import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormularioGenerico extends React.Component {
  state = {
    form: {
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    }, 
}

handleChange = e => {
  this.setState({
      form: {
          ...this.state.form, //mantiene la informacion de los campos
          [e.target.name]: e.target.value //le asigna al atributo entre parentesis el valor de dicho atributo en el formulario
      }
  })
  console.log(this.state);
}

handleSubmit = async e => {
   e.preventDefault() //esto hace que no recarge la pagina
  //     /*console.log(this.state)*/
  /*Aca se debe escribir los datos del form que estan en el state en un archivo
  .json con la estructura de objeto json */
  //Importar la libreria file en react
  //abrir el file
  //escribir en el file con su metodo write 
  //cerrar el archivo

  // fs('/db/usuario.json',open)
  //indicar que se escribira un json
  // fs.write(this.state.form)
  // fs.close
}
    render(){
      
        return(
            <Form onSubmit={this.handleSubmit}>
            {/*<Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
          
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row> */}
            
            <Form.Row>
              <Form.Group  controlId="formGridNombre">
                <Form.Label>nombre</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nombre } name="nombre" placeholder="ingrese nombre" />
              </Form.Group>
          
              <Form.Group  controlId="formGridApellido">
                <Form.Label>apellido</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.apellido } name="apellido" placeholder="ingrese apellido" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group  controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.email } name="email" type="email" placeholder="ingrese email" />
              </Form.Group>

              <Form.Group controlId="formGridTelefono">
                <Form.Label>telefono</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.telefono } name="telefono" placeholder="ingrese telefono" />
              </Form.Group>
            </Form.Row>
            
             {/* <Form.Row>      
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              </Form.Row> */}
             <Button variant="primary" type="submit">
              Registrar
            </Button> 
          </Form>  
        )
    }
}

export default FormularioGenerico;