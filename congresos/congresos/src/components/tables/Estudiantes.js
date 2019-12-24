import React from 'react';

const EstudiantesList = ({ estudiantes,handleDelete }) => (
    <table className="table" >
    <tbody> {
            estudiantes.map((estudiante) => (
                <tr key={estudiante.carnet} >
                <td > {estudiante.nombre} </td> 
                 <td >{estudiante.nacimiento} 
                </td>
                <td><button onSubmit={estudiante=>handleDelete(estudiante)}>Borrar</button></td></tr>))
    } </tbody> </table >
)                                       
export default EstudiantesList;