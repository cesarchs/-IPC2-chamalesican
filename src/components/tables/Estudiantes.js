import React from 'react';

const EstudiantesList = ({ estudiantes,handleDelete, handleEdit}) => (
    
    <table className="table">
        <tbody> {
            estudiantes.map((estudiante) => (
                <tr key={estudiante.carnet} >
                <td>{estudiante.carnet}</td>
                <td >{estudiante.nombre}</td> 
                 <td >{estudiante.correo}</td>
                 <td><input type="button" value="Editar" onClick ={()=>handleEdit(estudiante)} /></td>
                 <td><input type="button" value="Eliminar" onClick ={()=>handleDelete(estudiante)} /></td>
                </tr>))
        }</tbody>
    </table >
)   
export default EstudiantesList

