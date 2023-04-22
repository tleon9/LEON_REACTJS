import React from "react";
import {Card, Button} from 'react-bootstrap';
import { ItemCount } from "../ItemCounter/ItemCounter";

export const ItemDetail = ({id,description,price,image,category}) =>{

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Autem mollitia necessitatibus quas tempore iste, sit, 
            recusandae impedit reprehenderit eveniet modi dolorem sapiente 
            voluptates excepturi porro consequuntur aut deleniti. 
            Perspiciatis, odio.</p>
          <Card.Title>Category: {category}</Card.Title> 
          <ItemCount/>
            <Button variant="primary">Add to Cart </Button>
          
        </Card.Body>
      </Card>
    )
}