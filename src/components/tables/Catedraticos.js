import React from 'react';

const CatedraticosList = ({ catedraticos,handleDelete, handleEdit}) => (
    
    <table className="table">
        <tbody> {
            catedraticos.map((catedratico) => (
                <tr key={catedratico.registroPersonal} >
                <td>{catedratico.registroPersonal}</td>
                <td >{catedratico.nombre}</td> 
                 <td >{catedratico.correo}</td>
                 <td><input type="button" value="Editar" onClick ={()=>handleEdit(catedratico)} /></td>
                 <td><input type="button" value="Borrar" onClick ={()=>handleDelete(catedratico)} /></td>
                </tr>))
        }</tbody>
    </table >
)   
export default CatedraticosList

