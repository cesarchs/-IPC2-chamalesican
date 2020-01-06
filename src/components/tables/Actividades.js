import React from 'react';

const ActividadesList = ({ actividades,handleDelete, handleEdit}) => (
    
    <table className="table">
        <tbody> {
            actividades.map((actividad) => (
                <tr key={actividad.fecha} >
                <td>{actividad.fecha}</td>
                <td >{actividad.hora}</td> 
                 <td >{actividad.descripcion}</td>
                 <td><input type="button" value="Editar" onClick ={()=>handleEdit(actividad)} /></td>
                 <td><input type="button" value="Eliminar" onClick ={()=>handleDelete(actividad)} /></td>
                </tr>))
        }</tbody>
    </table >
)   
export default ActividadesList

