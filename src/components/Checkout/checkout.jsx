import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getFirestore } from '../../firebase/config'
import firebase from "firebase"
import 'firebase/firestore'

export const Checkout = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

  const [nombre, setNombre] = useState("")

  const [apellido, setApellido] = useState("")

  const [telefono, setTelefono] = useState("")

  const [email, setEmail] = useState("")

  const [emailc, setEmailc] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    
    console.log("Name:", nombre)
    console.log("Last Name:", apellido)
    console.log("Phone Number:", telefono)
    console.log("Email:", email)
    console.log("Emailc:", emailc)

    const orden = {
      buyer: {
        nombre,
        apellido,
        telefono,
        email,
        emailc
      },
      item: carrito,
      total_price: precioTotal(),
      data: firebase.firestore.Timestamp.fromDate(new Date())
    }

    const db = getFirestore()

    const ordenes = db.collection('ordenes')

    if(email == emailc){

      ordenes.add(orden)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Your order has been placed',
          text: `Keep your order id: ${res.id}`,
          willClose: () => {
            vaciarCarrito()
          }
        })
      })
      .finally(() => {
        console.log('Operacion realizada con exito')
      })

    carrito.forEach((item) => {
      const docRef = db.collection('productos').doc(item.id)

      docRef.get()
        .then((doc) => {
          docRef.update({
            stock: doc.data().stock - item.counter
          })
        })
    })


      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Verify email',
        
      })
    }


    
  }


  return (
    <div>

      <h3>Finish order</h3>
      <hr />

      <form onSubmit={handleSubmit} className='container mt-3'>

       
        <div className="form-group">
          <label htmlFor="nombre">Name</label>
          <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Last Name</label>
          <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Phone Number</label>
          <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Confirm Email</label>
          <input type="text" className="form-control" onChange={(e) => setEmailc(e.target.value)} value={emailc} />
        </div>
        <button type='submit' className='btn btn-success'>Finish</button>
        <Link to='/cart' className='btn btn-info'>Go to Car</Link>
      </form>

    </div>
  )
}