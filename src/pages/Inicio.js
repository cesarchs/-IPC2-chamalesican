import React from 'react';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import imagenusac from '../imagenes/usac.jpg'

class Inicio extends React.Component{
    
    handleClick (event) {
        axios.post("http://localhost:4000/prueva",
        {
          user:"hola"
        },
        )
        .then(response =>{}).catch (error =>{});
        event.preventDefault();
      }

    render (){
        return (
            <React.Fragment>
            <Menu/>
            <h1 className="container col-8 text-cente">
              CONGRESOS UNIVERSITARIOS
            </h1>
            <h4 className="container col-8 text-cente">
              Este es un proyecto para el control de congresos universitarios buscando agilizar toda la logisitica necesaria para un buen servicio y control en los congresos universitarios
           </h4>
            <img src ={imagenusac}className="container col-12 text-cente"/>
            </React.Fragment>
        )
    }
}
export default Inicio