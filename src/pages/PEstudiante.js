import React from 'react';
import MenuEstudiante from '../components/MenuEstudiante';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagenusac from '../imagenes/usac.jpg'

class PEstudiante extends React.Component{

    render (){
        return (
            <React.Fragment>
            <MenuEstudiante/>
            <img src ={imagenusac}className="container col-12 text-cente"/>
            </React.Fragment>
        )
    }
}
export default PEstudiante