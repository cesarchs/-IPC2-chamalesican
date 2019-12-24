import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class AdministradorForm extends Component{

    constructor(){
        super();
        this.state = {
            form: {
                nombre:'',
                nacimiento:'',
                telefono:'',
                correo:'',
                nickname:'',
                contrasena:'',
                puesto:''
            }//El estate se inicializa con un objeto pero dicho objeto esta vacio
        };
        // this.handleSumint= this.handleSubmit.bind(this);
        // this.handChange= this.handleChange.bind(this);
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
         const administrador=this.state.form
         const res= await axios.post("http://localhost:3001/createAdministrador",administrador);
         console.log(res.data); 
         this.setState({
            form: {
                nombre:'',
                nacimiento:'',
                telefono:'',
                correo:'',
                nickname:'',
                contrasena:'',
                puesto:''
            }
        })
      }
    render(){
        console.log(this.state.Administradores)
        return(
          <React.Fragment >
            <Form onSubmit={this.handleSubmit} className="container col-md-4 text-cente">
            <h2>CREAR ADMINISTRADOR</h2>
            <Form.Row>
              <Form.Group  controlId="formGridNombre">
                <Form.Label>nombre</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nombre } name="nombre" placeholder="ingrese nombre" />
              </Form.Group>
          
              <Form.Group  controlId="formGridNacimiento">
                <Form.Label>fecha de nacimiento</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nacimiento } name="nacimiento" placeholder="ingrese fecha de nacimiento" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group  controlId="formGridtelefono">
                <Form.Label>telefono</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.telefono } name="telefono"  placeholder="ingrese telefono" />
              </Form.Group>
              </Form.Row>

            <Form.Group  controlId="formGridcorreo">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.correo } name="correo" type="email" placeholder="ingrese su correo" />
              </Form.Group>

              <Form.Row>
            <Form.Group  controlId="formGridnickname">
                <Form.Label>nickname</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nickname } name="nickname"  placeholder="ingrese su nickname" />
              </Form.Group>
             </Form.Row>

             <Form.Row>
            <Form.Group  controlId="formGridcontrasena">
                <Form.Label>contraseña</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.contrasena } name="contrasena"  placeholder="ingrese su contraseña" />
              </Form.Group>

              <Form.Group controlId="formGridpuesto">
                <Form.Label>puesto</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.puesto } name="puesto" placeholder="ingrese su puesto" />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
            Registrar
          </Button> 
        </Form>
        </React.Fragment>
        )

    }
}
export default AdministradorForm;