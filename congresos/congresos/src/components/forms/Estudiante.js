import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class EstudianteForm extends Component{
  constructor(){
    super();
    this.state = {
        form: {
            carnet: '',
            nombre:'',
            nacimiento:'',
            telefono:'',
            correo:'',
            universidad:'',
            nacionalidad: '',
            nickname:'',
            contrasena:''
        }
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
         const estudiante= this.state.form
         const res=await axios.post("http://localhost:3001/createEstudiante",estudiante);
          console.log(res.data);
         this.setState({
           form:{
            carnet: '',
            nombre:'',
            nacimiento:'',
            telefono:'',
            correo:'',
            universidad:'',
            nacionalidad: '',
            nickname:'',
            contrasena:''
           }
         })
      }
         
         //esto hace que no recarge la pagina
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

    render(){
      console.log(this.state.Estudiantes)
        return(
            <Form onSubmit={this.handleSubmit} className="container col-md-4 text-cente">
              <h2>CREAR ESTUDIANTE</h2>

            <Form.Row>
            <Form.Group  controlId="formGridcarnet">
                <Form.Label>carnet</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.carnet } name="carnet"  placeholder="ingrese carnet" />
              </Form.Group>
              </Form.Row>

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

            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>univerdidad</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.universidad } name="universidad"  placeholder="ingrese su universidad" />
              </Form.Group>

              <Form.Row>
            <Form.Group  controlId="formGridnacionalidad">
                <Form.Label>nacionalidad</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nacionalidad } name="nacionalidad"  placeholder="ingrese su nacionalidad" />
              </Form.Group>

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
            </Form.Row>

            <Button variant="primary" type="submit">
            Registrar
          </Button> 
        </Form>
        )

    }
}
export default EstudianteForm;