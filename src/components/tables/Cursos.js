import React from 'react';

const CursosList = ({ cursos,handleDelete, handleEdit}) => (
    
    <table className="table">
        <tbody> {
            cursos.map((curso) => (
                <tr key={curso.codigo} >
                <td>{curso.codigo}</td>
                <td >{curso.nombre}</td> 
                <td >{curso.seccion}</td>
                <td >{curso.universidad}</td>
                <td><input type="button" value="Editar" onClick ={()=>handleEdit(curso)} /></td>
                <td><button type="button">Borrar</button></td>
                </tr>))
        }</tbody>
    </table >
)   
export default CursosList

