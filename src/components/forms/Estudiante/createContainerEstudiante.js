import React,{Component} from 'react';
import axios from 'axios';
import FormEstudiante from './formEstudiante';

class CreateContainerEstudiante extends Component{
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
      
        return(
            <FormEstudiante handleSubmit={this.handleSubmit} handleChange={this.handleChange} form={this.state.form} titulo="Registrar Estudiante" boton="Registrar"/>
        )
    }
}
export default CreateContainerEstudiante;