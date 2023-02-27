import React from "react";
import CrudTableRow from "./CrudTableRow";
//CrudTable Recibe los datos y los destructura en "({data})"
const CrudTable = ({ data, setDataToEdit, deleteData  })=>{
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Types</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>  
            {
                //Realizamos un condicional ternario, que indique que si "data" esta vacio entonces
                //Mostrara un fila que diga: "Empty Data"
                //Si no esta vacía entonces mostrara los datos.
                data.length === 0 ? 
                <tr><td colSpan="3">Empty Data</td></tr>:
                //Creamos un .map para recorrer todos los elementos del arreglo 
                //y pasarle los props al componente CrudTableRow.
                data.map(el => <CrudTableRow 
                    key={el.id}
                    el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />)
            }
            </tbody>
            <tfoot></tfoot>
        </table>
        </>
    )
}
export default CrudTable;