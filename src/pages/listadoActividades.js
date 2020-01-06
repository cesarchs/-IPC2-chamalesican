import React,{Component} from 'react';
import ActividadesList from '../components/tables/Actividades';
import axios from 'axios';
import { Redirect } from 'react-router'

class ListadoActividades extends Component{
    
    constructor(){
        super();
        this.state={
            fecha: '',
            hora:'',
            actividades:[],
            form:{},
            update:false
        }
        this.handleEdit=this.handleEdit.bind(this);
    }
   
    async componentDidMount() {
        try {
         const res=await axios.get("http://localhost:3001/mostrarActividad");
            this.setState({
                catedraticos: res.data
            })
        } catch (error) {
            console.log("Error")
        }
    }
   handleDelete= async actividad => {
    const res = await axios.delete("http://localhost:3001/eliminarActividad",actividad);
    alert(catedratico.registro );      
   }

   handleEdit= actividad => {
         this.setState({form:actividad});
         this.setState({update:true})
   }

//    handleSubmit= async e =>{
//     e.preventDefault() 
//     const registroPersonal=this.state.registroPersonal 
//     const res= await axios.delete("http://localhost:3001/eliminarEstudiante/"+registroPersonal); 
//     this.setState({
//             registroPersonal:''
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
        var A=[['fecha','hora']];//array de dos dimensiones con id y name como primer elemento(encabezado)
        var re=this.state.catedraticos;//En el state estaran los datos del json
        
        
        for(var item=0;item<re.length;item++){
            //mas campos modificar el push siguiente
        A.push([re[item].registroPersonal,re[item].nombre]);//agregamos los datos del json al array que ya tiene un encabezado
        }
        
        for(var i=0;i<A.length;++i){
        csvRow.push(A[i].join(","))//agrega a cada elemento una coma
        }
        var csvString=csvRow.join("%OA");//Se agrega a cada elemento del array un salto de linea
        var a=document.createElement("a");
        a.href='data:attachment/csv'+csvString;
        a.target="_Blank";
        a.download="name.csv";
        document.body.appendChild(a)
        a.click()
        }
  
    render() {

        if(this.state.update){
            return(<Redirect
                to={{
                  pathname: "/UpdateActividad",
                  form:this.state.form
                }}
              />);
        }
        return(
            <React.Fragment>
        <ActividadesList actividades={this.state.actividades} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        <button onClick={()=>this.exportCsv()} >Exportar</button>
        </React.Fragment>
        )
    }
}
export default ListadoActividades