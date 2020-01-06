import React,{Component} from 'react';
import ColaboradoresList from '../components/tables/Colaboradores';
import axios from 'axios';
import { Redirect } from 'react-router'


class ListadoCola extends Component{
    
    constructor(){
        super();
        this.state={
            carnet: '',
            colaboradores:[],
            form:{},
            update:false
        }
        this.handleEdit=this.handleEdit.bind(this);
    }
   
    async componentDidMount() {
        try {
         const res=await axios.get("http://localhost:3001/mostrarColaborador");
            this.setState({
                colaboradores: res.data
            })
        } catch (error) {
            console.log("Error")
        }
    }
   handleDelete= async Colaborador => {
    const res = await axios.delete("http://localhost:3001/eliminarEstudiante",Colaborador);
    alert(Colaborador.carnet);  
   }

   handleEdit= colaborador => {
    this.setState({form:colaborador});
    this.setState({update:true})
   }

   handleSubmit= async e =>{
    e.preventDefault() 
    const carnet=this.state.carnet 
    const res= await axios.delete("http://localhost:3001/eliminarColaborador/"+carnet); 
    this.setState({
            carnet:''
    })
   }
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
a.download="colaboradores.csv";
document.body.appendChild(a)
a.click()
}

    render() {

        if(this.state.update){
            return(<Redirect
                to={{
                  pathname: "/UpdateColaborador",
                  form:this.state.form
                }}
              />);
        }
        return(
            <React.Fragment>
        <ColaboradoresList colaboradores={this.state.colaboradores} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        <button onClick={()=>this.exportCsv()} >Exportar</button>
        </React.Fragment>
        )
    }
}       
export default ListadoCola 