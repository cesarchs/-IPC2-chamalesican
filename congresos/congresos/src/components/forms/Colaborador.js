import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class ColaboradorForm extends Component{

    state = {
        form: {
            carnet: '',
            nombre:'',
            nacimiento:'',
            telefono:'',
            correo:'',
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
         e.preventDefault() //esto hace que no recarge la pagina
          const colaborador= this.state.form
         const res=await axios.post("http://localhost:3001/createColaborador",colaborador);
          console.log(res.data);
         this.setState({
           form:{
            carnet: '',
            nombre:'',
            nacimiento:'',
            telefono:'',
            correo:'',
            nickname:'',
            contrasena:''
           }
         })
         
      }

    render(){
      console.log(this.state.colaborador)
        return(
            <Form onSubmit={this.handleSubmit} className="container col-md-4 text-cente">
            <h2>CREAR COLABORADOR</h2>

            <Form.Group  controlId="formGridcarnet">
                <Form.Label>carnet</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.carnet } name="carnet"  placeholder="ingrese carnet" />
              </Form.Group>

              <Form.Group  controlId="formGridNombre">
                <Form.Label>nombre</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nombre } name="nombre" placeholder="ingrese nombre" />
              </Form.Group>
          
              <Form.Group  controlId="formGridNacimiento">
                <Form.Label>fecha de nacimiento</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nacimiento } name="nacimiento" placeholder="fecha de nacimiento" />
              </Form.Group>

            <Form.Group  controlId="formGridtelefono">
                <Form.Label>telefono</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.telefono } name="telefono"  placeholder="ingrese telefono" />
              </Form.Group>

            <Form.Group  controlId="formGridcorreo">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.correo } name="correo" type="email" placeholder="ingrese su correo" />
              </Form.Group>

             <Form.Row>
            <Form.Group  controlId="formGridnickname">
                <Form.Label>nickname</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nickname } name="nickname"  placeholder="ingrese su nickname" />
              </Form.Group>

            <Form.Group  controlId="formGridcontrasena">
                <Form.Label>contraseña</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.contrasena } name="contrasena" type="password" placeholder="ingrese su contraseña" />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
            Registrar
          </Button> 
        </Form>
        )

    }
}
export default ColaboradorForm;