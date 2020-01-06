import React,{Component} from 'react';
import AdminsList from '../components/tables/Admins';
import axios from 'axios';
import { Redirect } from 'react-router'



class ListadoAdmins extends Component{
    
    constructor(){
        super();
        this.state={
            correo: '',
            administradores:[],
            form:{},
            update:false
        }
    }
   
    async componentDidMount() {
        try {
         const res=await axios.get("http://localhost:3001/mostrarAdministrador");
            this.setState({
                administradores: res.data
            })
        } catch (error) {
            console.log("Error")
        }
    }
   handleDelete= async administrador => {

       const res = await axios.delete("http://localhost:3001/eliminarEstudiante",administrador);
       this.setState ({
           correo:""
       })
    alert(administrador.correo );      
                //Logica para eliminar el estudiante
   }

   handleEdit= administrador => {
    this.setState({form:administrador});
    this.setState({update:true})
   }

   handleSubmit= async e =>{
    e.preventDefault() 
    const correo=this.state.correo 
    const res= await axios.delete("http://localhost:3001/"+correo); 
    this.setState({
            correo:''
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
        var A=[['correo','nombre']];//array de dos dimensiones con id y name como primer elemento(encabezado)
        var re=this.state.admininstradores;//En el state estaran los datos del json
        
        
        for(var item=0;item<re.length;item++){
            //mas campos modificar el push siguiente
        A.push([re[item].correo,re[item].nombre]);//agregamos los datos del json al array que ya tiene un encabezado
        }
        
        for(var i=0;i<A.length;++i){
        csvRow.push(A[i].join(","))//agrega a cada elemento una coma
        }
        var csvString=csvRow.join("%OA");//Se agrega a cada elemento del array un salto de linea
        var a=document.createElement("a");
        a.href='data:attachment/csv'+csvString;
        a.target="_Blank";
        a.download="administradores.csv";
        document.body.appendChild(a)
        a.click()
        }

    render() {

        if(this.state.update){
            return(<Redirect
                to={{
                  pathname: "/UpdateAdministrador",
                  form:this.state.form
                }}
              />);
        }
        return(
            <React.Fragment>
        <AdminsList administradores={this.state.administradores} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        <button onClick={()=>this.exportCsv()} >Exportar</button>
        </React.Fragment>
        )
    }
}

        

export default ListadoAdmins