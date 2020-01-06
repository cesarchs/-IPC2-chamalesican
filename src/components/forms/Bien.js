import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class BienForm extends Component{
    state = {
        form: {
            codigo: '',
            nombre:'',
            descripcion:'',
            cantidad:'',
            encargado:'',
            ubicacion:'',
            estado:''
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

         const bien= this.state.form
         const res=await axios.post("http://localhost:3001/createBien",bien);
          console.log(res.data);
         this.setState({
            codigo: '',
            nombre:'',
            descripcion:'',
            cantidad:'',
            encargado:'',
            ubicacion:'',
            estado:''
           });

      }

    render(){
        return( 
            <Form onSubmit={this.handleSubmit} className="container col-md-4 text-cente">
             <h2>CREAR BIEN</h2>

            <Form.Group  controlId="formGridregistro">
                <Form.Label>codigo bien</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.codigo } name="codigo"  placeholder="ingrese el codigo" />
              </Form.Group>

            <Form.Row>
              <Form.Group  controlId="formGridNombre">
                <Form.Label>nombre</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.nombre } name="nombre" placeholder="ingrese nombre" />
              </Form.Group>
          
              <Form.Group  controlId="formGridNacimiento">
                <Form.Label>descripcion</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.descripcion} name="descripcion" placeholder="ingrese una descripcion" />
              </Form.Group>
            </Form.Row>

            <Form.Group  controlId="formGridcorreo">
                <Form.Label>cantidad</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.cantidad } name="cantidad" placeholder="ingrese una cantidad" />
              </Form.Group>

              
            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>encargado</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.encargado} name="encargado"  placeholder="ingrese el encargado" />
              </Form.Group>

            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>ubicacion</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.ubicacion} name="ubicacion"  placeholder="ingrese la ubicacion" />
              </Form.Group>

            <Form.Group  controlId="formGriduniversidad">
                <Form.Label>estado</Form.Label>
                <Form.Control onChange = { this.handleChange } value = { this.state.form.estado} name="estado"  placeholder="ingrese el estado (utilizado o no)" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Registrar
          </Button> 
        </Form>
        )
    }
}
export default BienForm