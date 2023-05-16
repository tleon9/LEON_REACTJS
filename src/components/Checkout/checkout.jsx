import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Checkout = () =>{


    const [email, setEmail] = useState("")

    const [nombre, setNombre] = useState("")

    const [apellido, setApellido] = useState("")

    const [telefono, setTelefono] = useState("")

    const handleSubmit = (e) =>{

        e.preventDefault()
        console.log("Email:" , email)
        console.log("Nombre:" , nombre)
        console.log("Apellido:" , apellido)
        console.log("Telefono:" , telefono)
    }


    return(
        <div>


            <h3>Terminar Compra</h3>
            <hr />
            <form onSubmit={handleSubmit} className="container mt-3">

                <div className="form-group">
                    <label hatmlFor="email">Email</label>
                        <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                </div>
                <div className="form-group">
                    <label hatmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" onChange={(e)=> setNombre(e.target.value)} value={nombre}/>
                </div>
                <div className="form-group">
                    <label hatmlFor="apellido">Apellido</label>
                        <input type="text" className="form-control" onChange={(e)=> setApellido(e.target.value)} value={apellido}/>
                </div>
                <div className="form-group">
                    <label hatmlFor="telefono">Teléfono</label>
                        <input type="text" className="form-control" onChange={(e)=> setTelefono(e.target.value)} value={telefono}/>
                </div>



            <button type="submite" className="btn btn-success">Finish</button>
            <Link to='/cart' className ='btn btn-info'>Go to Car</Link>





            </form>



        </div>
    )

}