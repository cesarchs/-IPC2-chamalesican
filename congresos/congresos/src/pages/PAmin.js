import React from 'react';
import MenuAdmin from '../components/MenuAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagenusac from '../imagenes/usac.jpg'

class PAdmin extends React.Component{

    render (){
        return (
            <React.Fragment>
            <MenuAdmin/>
            <img src ={imagenusac}className="container col-12 text-cente"/>
            </React.Fragment>
        )
    }
}
export default PAdmin