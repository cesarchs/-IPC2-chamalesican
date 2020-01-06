import React,{Component} from 'react';
import CatedraticosList from '../components/tables/Catedraticos';
import axios from 'axios';
import { Redirect } from 'react-router'

class ListadoCate extends Component{
    
    constructor(){
        super();
        this.state={
            registro: '',
            catedraticos:[],
            form:{},
            update:false
        }
        this.handleEdit=this.handleEdit.bind(this);
    }
   
    async componentDidMount() {
        try {
         const res=await axios.get("http://localhost:3001/mostrarCatedratico");
            this.setState({
                catedraticos: res.data
            })
        } catch (error) {
            console.log("Error")
        }
    }
   handleDelete= async catedratico => {
    const res = await axios.delete("http://localhost:3001/eliminarEstudiante",catedratico);
    alert(catedratico.registro );      
   }

   handleEdit= catedratico => {
         this.setState({form:catedratico});
         this.setState({update:true})
   }

   handleSubmit= async e =>{
    e.preventDefault() 
    const registroPersonal=this.state.registroPersonal 
    const res= await axios.delete("http://localhost:3001/eliminarEstudiante/"+registroPersonal); 
    this.setState({
            registroPersonal:''
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
        var A=[['registro','nombre']];//array de dos dimensiones con id y name como primer elemento(encabezado)
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
                  pathname: "/UpdateCatedratico",
                  form:this.state.form
                }}
              />);
        }
        return(
            <React.Fragment>
        <CatedraticosList catedraticos={this.state.catedraticos} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        <button onClick={()=>this.exportCsv()} >Exportar</button>
        </React.Fragment>
        )
    }
}
export default ListadoCate