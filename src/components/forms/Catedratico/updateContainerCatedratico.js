import React,{Component} from 'react';
import axios from 'axios';
import FormCatedratico from './formCatedratico';

class UpdateContainerCatedratico extends Component{
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
         const catedratico= this.state.form
         //Meterle nuevos campos 
        //  estudiante.curso=this.state.curso;
        //  estudiante.pais="Guatemala";
         const res=await axios.put("http://localhost:3001/actualizarCatedratico",catedratico);
          console.log(res.data);
         this.setState({
            form: {
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
            <FormCatedratico handleSubmit={this.handleSubmit} handleChange={this.handleChange} form={this.state.form} titulo="Actualizar Catedratico" boton="Actualizar"/>
        )
    }
}
export default UpdateContainerCatedratico