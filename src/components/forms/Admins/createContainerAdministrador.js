import React,{Component} from 'react';
import axios from 'axios';
import FormAdministrador from './FormAdministrador'

class createContainerAdministrador extends Component{

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
         const administrador= this.state.form
         const res=await axios.post("http://localhost:3001/createAdministrador",administrador);
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
        return( 

            <FormAdministrador handleSubmit={this.handleSubmit}  handleChange={this.handleChange} form ={this.state.form} titulo="Registrar Administrador" boton ="Registrar" />
        )
    }
}
export default createContainerAdministrador