import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

import React from "react";

const Tarjeta = () => {
  return (
    <Card clasName="mb-3" style={{ color: "#000" }}>
      <Card.Img src="https://picsum.photos/700/500" />
      <Card.Body>
        <Card.Title>Card Example</Card.Title>
        <Card.Text>This an example of react bootstrap cards</Card.Text>
        <Button variant="success">Read more</Button>
      </Card.Body>
    </Card>
  );
};

export default Tarjeta;
