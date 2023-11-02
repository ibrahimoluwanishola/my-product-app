import React from 'react';
import { Card } from 'react-bootstrap';

function CardComponent({ product }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imagePath} alt="Product" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;