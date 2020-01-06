import React from 'react';

const AdminsList = ({ administradores,handleDelete, handleEdit}) => (
    
    <table className="table">
        <tbody> {
            administradores.map((administrador) => (
                <tr key={administrador.correo} >
                <td>{administrador.nombre}</td>
                <td >{administrador.correo}</td> 
                 <td >{administrador.puesto}</td>
                 <td><input type="button" value="Editar" onClick ={()=>handleEdit(administrador)} /></td>
                 <td><input type="button" value="Borrar" onClick ={()=>handleDelete(administrador)}/></td>
                </tr>))
        }</tbody>
    </table >
)   
export default AdminsList

