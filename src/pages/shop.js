import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import products from "../json/products.json";

const Shop = () => {
  return (
    <Container>
      <Accordion defaultActiveKey="0" className="my-2">
        <Accordion.Toggle
          as={Card.Header}
          variant="link"
          eventKey="1"
          className="text-center"
        >
          Filteri i sortiranje
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card>
            <Card.Body>
              <Form.Group>
                <Row xs={2} sm={3} md={4}>
                  <Col key="showAll">
                    <Form.Check
                      type="radio"
                      name="categories"
                      id={"cb-ctg-showAll"}
                      label={
                        <label htmlFor={"cb-ctg-showAll"}>Prikaži sve</label>
                      }
                    ></Form.Check>
                  </Col>
                </Row>
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col>
                  <Nav justify variant="tabs" defaultActiveKey="az">
                    <Nav.Item>
                      <Nav.Link eventKey="az">A -&gt; Z</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="za">Z -&gt; A</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="09">0 -&gt; 9</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="90">9 -&gt; 0</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Accordion.Collapse>
      </Accordion>
      <Row xs={1} sm={2} md={2} lg={3} className="mt-3">
        {products.products.map((product, index) => (
          <Col key={index} className="my-2">
            <Card className="h-100 ">
              <img className="p-4" src={"/" + product.imgName} />
              <Card.Body className="py-0 d-flex flex-column justify-content-between">
                <Card.Title>{product.name}</Card.Title>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <h4 className="font-weight-bold align-self-center mb-0">
                  {product.price}
                  {" €"}
                </h4>
                <Button variant="warning">Add to cart</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
