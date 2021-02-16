import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TwoColumns from "../components/twoColumns/twoColumns";
import MyNavbar from "../components/navbar/navbar";

import dataJson from "../json/data.json";
const user = dataJson.user;
const fieldsData = [
  { key: "firstname", label: "First name" },
  { key: "lastname", label: "Last Name" },
  { key: "email", label: "E-mail" },
  { key: "address", label: "Address" },
];
export default function Profile() {
  return (
    <>
      <MyNavbar></MyNavbar>

      <Container>
        <TwoColumns main="right">
          <div className="text-center">
            <Image
              fluid
              src={user.imageUrl}
              roundedCircle
              className="mb-5 w-50 border border-primary"
            />
            <Form className="text-left">
              {fieldsData.map((field) => (
                <Form.Group
                  as={Row}
                  noGutters
                  controlId={field.key}
                  key={field.key}
                >
                  <Col xs="9">
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control defaultValue={user[field.key]} />
                  </Col>
                  <Col
                    xs="3"
                    className="d-flex justify-content-end flex-column pl-1"
                  >
                    <Button block>Edit</Button>
                  </Col>
                </Form.Group>
              ))}
            </Form>
          </div>
          <></>
        </TwoColumns>
      </Container>
    </>
  );
}
