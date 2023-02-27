import React, { useEffect, useState } from "react";

//ESPECIFICAMOS EL ESTADO INICIAL DEL FORMULARIO 
const initailForm ={
    name: "",
    types: "",
    id: null,
}

const CrudForm = ({ createData,updateData,dataToEdit,setDataToEdit })=>{
    //HOOK Para establecer cambios de estado, esta es la variable de estado dle formulario. 
    const [form, setForm] = useState(initailForm)
    //=================== EVENTOS QUE MANEJAREMOS ===================
    const handleChange = (e)=>{
        setForm({
            //Spread operator. Nos ayuda a agregar los valores a nuestro nuevo arreglo
            //dichos valores se encuentran en nuestros inputs.
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    //useEffect va a mandar a traer la información de la fila de la tabla a la que le dimos editar,
    //para que los datos de esa fila se vayan al formulario.
    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit)
        }else{setForm(initailForm)}
    }, [dataToEdit])

    const handleSubmit = (e)=>{
        e.preventDefault();
        //Hacemos referencia a las variables de estado, si la variable "name" y "types" estan
        //vacias, entonces mostrara un alert de que los campos son requeridos.
        if(!form.name || !form.types){
            alert("Todos los datos son requeridos.");
            return;
        }
        //Si la variable de estado "id" es igual a nulo, entonces ejecutaras la acción de agregar
        //ya que de lo contrario,  si el id no es nulo entonces se estara ejecutando la acción de editar.
        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        }
        handleReset()
    }
    //En esta función reseteamos los valores iniciales de nuestras variables de estado
    const handleReset = (e)=>{
        //Restablecemos el estado inicial de la función setForm para que todos los campos.
        setForm(initailForm);
        //Restablecemos el valor de estado de "setDataToEdit" a null
        setDataToEdit(null);
    }
    return(
        <>
            <h3>{dataToEdit ? "Editar": "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Ingresa el nombre del pokemón" 
                    onChange={handleChange} 
                    value={form.name}>
                </input>
                <input 
                    type="text" 
                    name="types" 
                    placeholder="Ingresa el tipo del pokemón" 
                    onChange={handleChange} 
                    value={form.types}>
                </input>
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </>
    )
}
export default CrudForm;