import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Table,
  Card,
} from "react-bootstrap";
import TwoColumns from "../components/twoColumns/twoColumns";
import MyNavbar from "../components/navbar/navbar";
import dataJson from "../json/data.json";
import productsJson from "../json/data.json";
const products = productsJson.currentOrder;

const user = dataJson.user;
const fieldsData = [
  { key: "firstname", label: "First name" },
  { key: "lastname", label: "Last Name" },
  { key: "email", label: "E-mail" },
  { key: "address", label: "Address" },
];

const Profile = () => {
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
          <div className="px-lg-4">
            <h1>Previous orders :</h1>
            <Card>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
            <Card className="my-3">
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </TwoColumns>
      </Container>
    </>
  );
};

export default Profile;
