import React,{Component} from 'react'
import axios from 'axios';
class CargaMasiva extends Component {
    
    constructor(){
        super();
        this.state = {
                CoffeBreak:[],//cambiar nombre al array
                nombre:"CoffeBreak"//cambiar nombre 
        }
        
      }

      handleFile(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file);
        
        var CoffeBreak=[];
        reader.onload = function onLoad() {
            var result = reader.result; 
            var lineas = result.split('\n');
            var valores=[];
            for(var i=0 ;i< lineas.length;i++) {
             valores=lineas[i].split(',');
             //cambiar estructura del objeto
             var cofeeBreak={
                tipo:valores[0],
                nombre:valores[1],
                descripcion:valores[2],
                cantidad:valores[3]
            }
              
              CoffeBreak.push(cofeeBreak);
            }
          }
         
         this.setState({CoffeBreak});
      }
      
       handleSubmit=async e =>{
        e.preventDefault()
        const CoffeBreak={
            array:this.state.CoffeBreak,
            nombre:this.state.nombre
        }
        //La ruta va ser la misma para todas masivas lo unico que cambia es el objeto que se le manda
        const res=await axios.post("http://localhost:3001/cargaMasiva",CoffeBreak);
         console.log(res.data);
        this.setState({
                CoffeBreak:[],
                name:""
        })
       }
    render(){
        return(
            <form>
                <div>
                    <label>
                        seleccione archivo
                    </label>
                    <input type ="file" name="file" onChange={(e)=>this.handleFile(e)}></input>
                </div>
                <br/>
                <button type="button" onClick={(e)=>this.handleSubmit(e)}>CARGAR</button>
            </form>
        )
    }
} 
export default CargaMasiva