import React,{Component} from 'react';
import EstudiantesList from '../components/tables/Estudiantes';
import axios from 'axios';
import { Redirect } from 'react-router'


class Listado extends Component{
    
    constructor(){
        super();
        this.state={
            carnet: '',
            estudiantes:[],
            form:{},
            update:false
        }
        this.handleEdit=this.handleEdit.bind(this);
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
   handleDelete= async estudiante => {

    const res = await axios.delete("http://localhost:3001/eliminarEstudiante",estudiante);
    
       this.setState ({
           correo:""
       })
    alert(estudiante.carnet );      
   }

   handleEdit=estudiante => { 
        this.setState({form:estudiante});
        this.setState({update:true})
   }

//    handleSubmit= async e =>{
//     e.preventDefault() 
//     const carnet=this.state.carnet 
//     const res= await axios.delete("http://localhost:3001/eliminarEstudiante/"+carnet); 
//     alert (carnet)
//     this.setState({
//             carnet:''
//     })
//    }
   handleChange = e => {
    this.setState({
            ...this.state,
            [e.target.name]: e.target.value 
    })
  }
  exportCsv()
{
var csvRow=[];
//mas campos modificar el array siguiente
var A=[['carnet','nombre']];//array de dos dimensiones con id y name como primer elemento(encabezado)
var re=this.state.estudiantes;//En el state estaran los datos del json


for(var item=0;item<re.length;item++){
    //mas campos modificar el push siguiente
A.push([re[item].carnet,re[item].nombre]);//agregamos los datos del json al array que ya tiene un encabezado
}

for(var i=0;i<A.length;++i){
csvRow.push(A[i].join(","))//agrega a cada elemento una coma
}
var csvString=csvRow.join("%OA");//Se agrega a cada elemento del array un salto de linea
var a=document.createElement("a");
a.href='data:attachment/csv'+csvString;
a.target="_Blank";
a.download="estudiantes.csv";
document.body.appendChild(a)
a.click()
}
    render() {
        
        if(this.state.update){
            return(<Redirect
                to={{
                  pathname: "/UpdateEstudiante",
                  form:this.state.form
                }}
              />);
        }
        return(
            <React.Fragment>
        <EstudiantesList estudiantes={this.state.estudiantes} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        <button onClick={()=>this.exportCsv()} >Exportar</button>
        </React.Fragment>
        )
    }
}
export default Listado 