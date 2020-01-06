import React,{Component} from 'react';
import axios from 'axios';
import FormColaborador from './formColaborador'


class CreateContainerColaborador extends Component{
   constructor(){
       super();
    this.state = {
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
   }
    
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form, //mantiene la informacion de los campos
                [e.target.name]: e.target.value //le asigna al atributo entre parentesis el valor de dicho atributo en el formulario
            }
        })
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
        return(
                <FormColaborador handleSubmit={this.handleSubmit} handleChange={this.handleChange} form={this.state.form} titulo="Registrar Colaborador" boton="Registrar"/>
        )

    }
}
export default CreateContainerColaborador;