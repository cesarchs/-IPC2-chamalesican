import React,{Component} from 'react';
import axios from 'axios';
import FormAdministrador from './FormAdministrador';

class UpdateContainerAdministrador extends Component{
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
    componentDidMount(){
        console.log("en las props",this.props.location.form);
         this.setState({form:this.props.location.form});
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
         //Meterle nuevos campos 
        //  estudiante.curso=this.state.curso;
        //  estudiante.pais="Guatemala";
         const res=await axios.put("http://localhost:3001/actualizarAdministrador",administrador);
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
            <FormAdministrador handleSubmit={this.handleSubmit} handleChange={this.handleChange} form={this.state.form} titulo="Actualizar Administrador" boton="Actualizar"/>
        )
    }
}
export default UpdateContainerAdministrador