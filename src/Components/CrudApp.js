import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
const initialDb = [
    {
        id: 1,
        name: "Flareon",
        types: "Fire"
    },
    {
        id: 2,
        name: "Eevee",
        types: "Normal"
    },
    {
        id: 3,
        name: "Vaporeon",
        types: "Water"
    },
    {
        id: 4,
        name: "Flareon",
        types: "Fire"
    },
    {
        id: 5,
        name: "Leafeon",
        types: "Plant"
    },
    {
        id: 6,
        name: "Jolteon",
        types: "Electric"
    },
    {
        id: 7,
        name: "Umbreon",
        types: "Dark"
    }
] 

const CrudApp = ()=>{
    //======================= VARIABLES DE ESTADO ======================= 
    //Estas variables de estado nos ayudan a asignarle une stado inicial a nuestra BD, conforme la requiramos
    //Les podemos asignar nuevos estados, ya sea para agregar, actualizar o eliminar.
    //El estado inicial de la BD sera un array con 7 evoluciones de eevee.
    const [db,setDb] = useState(initialDb);
    //Variable de estado para editar.
    const [dataToEdit, setDataToEdit] = useState(null);
    //=====================================================================
    const createData = (data)=>{
        data.id = Date.now();
        //Aquí agrega los datos a la base de datos
        setDb([...db, data]);
    }
    const updateData = (data)=>{
        //Si el elemento id es igual al id que le pasamos, entonces realizara una 
        //actualización de lo contrario no hara nada.
        let newData = db.map(el => el.id === data.id? data:el)
        setDb(newData)
    }
    const deleteData = (id)=>{
        let isDelete = window.confirm(`¿Deseas eliminar este dato?'${id}'`);
        if(isDelete === true){
            //De la base de datos va a filtrar el elemento que su id sea diferente 
            //del id que le estamos pasando.
            let newData = db.filter(el => el.id !== id);
            //Actualizamos la variable de estado.
            setDb(newData);
        }else{return;}

    }
    return(
        <div>
            <h2>CRUD APP</h2>
            {/*===== El formulario recibe 4 propiedades que dependera de la acción que realice el usuario. =====*/}
            <CrudForm 
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            <CrudTable 
                data={db}
                //Volvemos a llamar setDataToEdit para cuando el usuario le de en editar los datos
                //se vayan al formulario.
                setDataToEdit={setDataToEdit}
                //Props que ejecutara la función de eliminar.
                deleteData={deleteData}
            />
        </div>
    )
}
export default CrudApp;