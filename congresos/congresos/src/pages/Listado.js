import React,{Component} from 'react';
import EstudiantesList from '../components/tables/Estudiantes';
import axios from 'axios';
class Listado extends Component{
    
    constructor(){
        super();
        this.state={
            estudiantes:[]
        }
    }
   
    async componentDidMount() {
        try {
         const res=await axios.get("http://localhost:3001/mostrarEstudiantes");
            this.setState({
                estudiantes: res.data
            })
        } catch (error) {
            console.log("Error")
        }
    }
   handleDelete=async estudiante => {
        console.log(estudiante);
        //Logica para eliminar el estudiante
   }
    render() {
        return(<EstudiantesList estudiantes={this.state.estudiantes} handleDelete={this.handleDelete}/>)
        
    }
}

export default Listado 