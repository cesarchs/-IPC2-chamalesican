import React from 'react';

const ColaboradoresList = ({ colaboradores,handleDelete, handleEdit}) => (
    
    <table className="table">
        <tbody> {
            colaboradores.map((colaborador) => (
                <tr key={colaborador.carnet} >
                <td>{colaborador.carnet}</td>
                <td >{colaborador.nombre}</td> 
                 <td >{colaborador.correo}</td>
                 <td><input type="button" value="Editar" onClick ={()=>handleEdit(colaborador)} /></td>
                 <td><input type="button" value="Borar" onClick ={()=>handleDelete(colaborador)} /></td>
                </tr>))
        }</tbody>
    </table >
)   
export default ColaboradoresList

