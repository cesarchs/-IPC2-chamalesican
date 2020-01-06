import React,{Component} from 'react';
import axios from 'axios';
import FormCatedratico from './formCatedratico'

class createContainerCatedratico extends Component{
    constructor(){
        super();
        this.state = {
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
             form:{
          registro: '',
          nombre:'',
          nacimiento:'',
          correo:'',
          universidad:'',
          nickname:'',
          contrasena:''
                 }
        })
      }

    render(){
        return( 

            <FormCatedratico handleSubmit={this.handleSubmit}  handleChange={this.handleChange} form ={this.state.form} titulo="Registrar Catedratico" boton ="Registrar" />
        )
    }
}
export default createContainerCatedratico