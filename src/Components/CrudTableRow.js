import React from "react";
//CrudTableRow recibe los props de CrudTable, los destructura en "({el})"
const CrudTableRow = ({ el,setDataToEdit, deleteData })=>{
//El elemento llamado "el" es el objeto que recibe todos los datos que va formando cada una de las filas
//de la tabla. Destructuramos el objeto "el" para mandar a llamar unicamente sus identificadores en "tr". 
let {name, types, id} = el;
    return(
        <>
            <tr>
                {/*Recíbe las props en los parametros especificados despues del punto*/}
                <td>{name}</td>
                <td>{types}</td>
                <td>
                    <button onClick={()=>setDataToEdit(el)}>Edit</button>
                    {/*La función deleteData() le pasa el id del elemento en el que estamos para poder eliminarlo.*/}
                    <button onClick={()=>deleteData(id)}>Delete</button>
                </td>
            </tr>
        </>
    )
}
export default CrudTableRow;
