import React from "react";
import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


export const Item = ({id,description,price,image,category}) =>{

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <Card.Title>Category : {category}</Card.Title>
          <Link to={`/detail/${id}`} >
            <Button variant="primary">Details</Button>
          </Link>
          
        </Card.Body>
      </Card>
    )
}