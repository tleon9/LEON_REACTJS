import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'
import './CartScreen.css';

export const CartScreen = () => {

    const {carrito,precioTotal, removerItem, vaciarCarrito} = useContext(CartContext)

    return (
        <div className='container my-5'>
        {
          carrito.length === 0
            ? <>
              <h3>Car is empty </h3>
              <hr />
              <Link to='/' className='btn btn-success'> Get back to store </Link>
            </>
            : <>
              <h3>Items in Car</h3>
              <hr />
              {
                carrito.map((prod) => (
                  <>
                    <div className='listado'>
                      <p>Product: {prod.description}</p>
                      <p>${prod.price}</p>
                      <p>Quantity: {prod.counter}</p>
                    </div>
                    <Button onClick={() => removerItem(prod.id)}>
                      <BsFillTrashFill />
                    </Button>
                  </>
                ))
              }
              <hr />
              <strong>Total: ${precioTotal()}</strong>
              <hr />
              <Button className='btn btn-danger' onClick={vaciarCarrito}> Clean Car </Button>
              <Link to= '/checkout' className='btn btn-success'>Finish payment</Link>
            </>
        }
        </div>

      )

}