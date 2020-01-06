import React,{Component} from 'react';
import CursosList from '../components/tables/Cursos';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class ListadoCurso extends Component{
    
    constructor(){
        super();
        this.state={
            codigo: '',
            cursos:[]
        }
    }
   
    async componentDidMount() {
        try {
         const res=await axios.get("http://localhost:3001/mostrarCurso");
            this.setState({
                cursos: res.data
            })
        } catch (error) {
            console.log("Error")
        }
    }
   handleDelete= async curso => {
    alert(curso.codigo );      
                //Logica para eliminar el estudiante
   }

   handleEdit= async curso => {
         console.log(curso.codigo);
   }

   handleSubmit= async e =>{
    e.preventDefault() 
    const codigo=this.state.codigo 
    const res= await axios.delete("http://localhost:3001/eliminarEstudiante/"+codigo); 
    alert (codigo)
    this.setState({
            codigo:''
    })
   }
   handleChange = e => {
    this.setState({
            ...this.state,
            [e.target.name]: e.target.value 
    })
  }
    render() {

        return(
            <React.Fragment>
        <CursosList cursos={this.state.cursos} handleEdit={this.handleEdit}/>
        


        <Form onSubmit={this.handleSubmit} className="container col-md-4 text-cente">
        <h2>ELIMINAR</h2>

        <Form.Group  controlId="formGridcarnet">
        <Form.Label>codigo</Form.Label> 
        <Form.Control onChange = { this.handleChange } value = { this.state.codigo } name="codigo"  placeholder="ingrese codigo curso" />
        </Form.Group>

        <Button variant="primary" type="submit">
        eliminar
       </Button> 
        </Form>
        </React.Fragment>

        )
    }
}

        

export default ListadoCurso 