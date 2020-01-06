import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class ActividadForm extends Component{
    state = {
        form: {
            fecha: '',
            hora:'',
            lugar:'',
            tipo:'',
            cantidadMax:'',
            expositor:'',
            descripcion:''
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
         const actividad= this.state.form
         const res=await axios.post("http://localhost:3001/createActividad",actividad);
          console.log(res.data);
         this.setState({
            form: {
                fecha: '',
                hora:'',
                lugar:'',
                tipo:'',
                cantidadMax:'',
                expositor:'',
                descripcion:''
            }
           });
      }

    render(){
        return( 
            <Form onSubmit={this.handleSubmit} className="container col-md-4 text-cente">
             <h2>CREAR ACTIVIDAD</h2>

            <Form.Group  controlId="formGridregistro">
                <Form.Label>fecha</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.fecha } name="fecha"  placeholder="ingrese fecha" />
              </Form.Group>

            <Form.Row>
              <Form.Group  controlId="formGridNombre">
                <Form.Label>hora</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.hora } name="hora" placeholder="ingrese hora" />
              </Form.Group>
          
              <Form.Group  controlId="formGridNacimiento">
                <Form.Label>lugar</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.lugar} name="lugar" placeholder="ingrese un lugar" />
              </Form.Group>
            </Form.Row>

            <Form.Group  controlId="formGridcorreo">
                <Form.Label>tipo</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.tipo } name="tipo" placeholder="ingrese un tipo" />
              </Form.Group>

              
            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>cantidadMax</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.cantidadMax} name="cantidadMax"  placeholder="ingrese la cantidad maxima" />
              </Form.Group>

            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>expositor</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.expositor} name="expositor"  placeholder="ingrese un expositor" />
              </Form.Group>

            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>descripcion</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.descripcion} name="descripcion"  placeholder="ingrese una descripcion" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Registrar
          </Button> 
        </Form>
        )
    }
}
export default ActividadForm