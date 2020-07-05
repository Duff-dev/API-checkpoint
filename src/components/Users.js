import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import User from "./User";

const Users = (props) => {
  return (
    <div>
      <Container fluid>
        <Row xs={1} sm={2} md={2} lg={3} className="align-items-start">
          {props.users.map((user) => (
            <Col key={user.id} className="my-col justify-content-center ">
              <User user={user} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Users;
