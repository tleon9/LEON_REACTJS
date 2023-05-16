import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({id,name,description,price,image,category, stock}) =>{



  const navigate = useNavigate()

  const volver = () =>{
    navigate(-1)
  }

  

  const {addToCart} = useContext(CartContext)


  const [counter, setCounter]= useState(0)

  const sumarAlCarrito = () =>{
    const newItem ={
      id,
      description,
      image,
      price,
      category,
      counter
    }
    console.log(newItem)
    addToCart(newItem)

  }

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Autem mollitia necessitatibus quas tempore iste, sit, 
            recusandae impedit reprehenderit eveniet modi dolorem sapiente 
            voluptates excepturi porro consequuntur aut deleniti. 
            Perspiciatis, odio.</p>
          <Card.Title>Category: {category}</Card.Title> 
          <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
            <Button onClick={sumarAlCarrito}>Add to Cart </Button>
            
        </Card.Body>
        <Button onClick={volver} className='btn-btn-succes'> Go Back</Button>
        <Link to ='/cart' className="btn btn-info">Go to Car</Link>
          
      </Card>
    )
}