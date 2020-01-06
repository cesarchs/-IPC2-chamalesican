import React from 'react';
import MenuColaborador from '../components/MenuColaborador';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagenusac from '../imagenes/usac.jpg'

class PColaborador extends React.Component{

    render (){
        return (
            <React.Fragment>
            <MenuColaborador/>
            <img src ={imagenusac}className="container col-12 text-cente"/>
            </React.Fragment>
        )
    }
}
export default PColaborador