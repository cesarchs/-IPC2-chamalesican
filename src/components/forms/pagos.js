import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class PagoForm extends Component{
    state = {
        form: {
            carnet: '',
            cantidad:'',
            factura:'',
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

         const curso= this.state.form
         const res=await axios.post("http://localhost:3001/createPago",curso);
          console.log(res.data);
         this.setState({
            form: {
                carnet: '',
                cantidad:'',
                factura:'',
            }
           });

      }

    render(){
        return( 
            <Form onSubmit={this.handleSubmit} className="container col-md-4 text-cente">
             <h2>CREAR PAGO</h2>

            <Form.Group  controlId="formGridregistro">
                <Form.Label>codigo curso</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.carnet } name="carnet"  placeholder="ingrese el codigo" />
              </Form.Group>

            <Form.Row>
              <Form.Group  controlId="formGridNombre">
                <Form.Label>nombre</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.cantidad } name="cantidad" placeholder="ingrese nombre" />
              </Form.Group>
          
              <Form.Group  controlId="formGridNacimiento">
                <Form.Label>seccion</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.factura} name="factura" placeholder="ingrese la seccion" />
              </Form.Group>
            </Form.Row>

            <Form.Group  controlId="formGridcorreo">
                <Form.Label>universidad</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.universidad } name="universidad" placeholder="ingrese la universidad" />
              </Form.Group>

              
            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>titular</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.titular} name="titular"  placeholder="ingrese el titular" />
              </Form.Group>

            <Button variant="primary" type="submit">
            Registrar
          </Button> 
        </Form>
        )
    }
}
export default PagoForm