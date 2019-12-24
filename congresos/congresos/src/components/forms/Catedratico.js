import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class CatedraticoForm extends Component{
    state = {
        form: {
            registro: '',
            nombre:'',
            nacimiento:'',
            correo:'',
            universidad:'',
            nickname:'',
            contrasena:''
        }
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
         e.preventDefault() 

         const catedratico= this.state.form
         const res=await axios.post("http://localhost:3001/createCatedratico",catedratico);
          console.log(res.data);
         this.setState({
          registro: '',
          nombre:'',
          nacimiento:'',
          correo:'',
          universidad:'',
          nickname:'',
          contrasena:''
           });

      }

    render(){
        return( 
            <Form onSubmit={this.handleSubmit} className="container col-md-4 text-cente">
             <h2>CREAR CATEDRATICO</h2>

            <Form.Group  controlId="formGridregistro">
                <Form.Label>Registro personal</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.registro } name="registro"  placeholder="ingrese su registro personal" />
              </Form.Group>

            <Form.Row>
              <Form.Group  controlId="formGridNombre">
                <Form.Label>nombre</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nombre } name="nombre" placeholder="ingrese nombre" />
              </Form.Group>
          
              <Form.Group  controlId="formGridNacimiento">
                <Form.Label>fecha de nacimiento</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nacimiento } name="nacimiento" placeholder="fecha de nacimiento" />
              </Form.Group>
            </Form.Row>

            <Form.Group  controlId="formGridcorreo">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.correo } name="correo" type="email" placeholder="ingrese su correo" />
              </Form.Group>

              
            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>univerdidad</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.universidad } name="universidad"  placeholder="ingrese su universidad" />
              </Form.Group>
              
 
            <Form.Group  controlId="formGridnickname">
                <Form.Label>nickname</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nickname } name="nickname"  placeholder="ingrese su nickname" />
              </Form.Group>
 
            <Form.Group  controlId="formGridcontrasena">
                <Form.Label>contraseña</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.contrasena } name="contrasena"  placeholder="ingrese su contraseña" />
              </Form.Group>

            <Button variant="primary" type="submit">
            Registrar
          </Button> 
        </Form>
        )

    }
}
export default CatedraticoForm;