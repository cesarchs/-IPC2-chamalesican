import React from 'react';
import MenuCatedratico from '../components/MenuCatedratico';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagenusac from '../imagenes/usac.jpg'

class PCatedratico extends React.Component{

    render (){
        return (
            <React.Fragment>
            <MenuCatedratico/>
            <img src ={imagenusac}className="container col-12 text-cente"/>
            </React.Fragment>
        )
    }
}
export default PCatedratico