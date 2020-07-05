import React from "react";
import Card from "react-bootstrap/Card";

const User = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.user.name}</Card.Title>
        <Card.Title>{props.user.email}</Card.Title>
        <Card.Title>{props.user.address.street}</Card.Title>
        <Card.Title>{props.user.phone}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default User;
