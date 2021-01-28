import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TwoColumns from "../components/twoColumns/twoColumns";

const user = {
  photoUrl: "./images",
};
export default function Profile() {
  return (
    <Container>
      <TwoColumns>
        <Image fluid src={user.photoURL} roundedCircle className="mb-5 w-50" />
        <Form>
          <Form.Group as={Row} controlId="proifleEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="6">
              <Form.Control
                plaintext
                readOnly
                defaultValue="email@example.com"
              />
            </Col>
            <Col sm="4">
              <Button block>Promijeni</Button>
            </Col>
          </Form.Group>
        </Form>
      </TwoColumns>
    </Container>
  );
}
