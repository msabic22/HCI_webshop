import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Accordion,
  Nav,
} from "react-bootstrap";
import products from "../json/products.json";
import MyNavbar from "../components/navbar/navbar";

const navData = [
  {
    key: "az",
    text: "A - Z",
  },
  {
    key: "za",
    text: "Z - A",
  },
  {
    key: "09",
    text: "0 - 9",
  },
  {
    key: "90",
    text: "9 - 0",
  },
];

const Shop = () => {
  return (
    <>
      <MyNavbar></MyNavbar>
      <Container>
        <Row>
          <Col>
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
                    <Nav justify variant="tabs" defaultActiveKey="az">
                      <Container>
                        <Row xs={2} md={4}>
                          {navData.map((nav) => (
                            <Col>
                              <Nav.Item>
                                <Nav.Link eventKey={nav.key}>
                                  {nav.text}
                                </Nav.Link>
                              </Nav.Item>
                            </Col>
                          ))}
                        </Row>
                      </Container>
                    </Nav>
                  </Card.Body>
                </Card>
              </Accordion.Collapse>
            </Accordion>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4} className="mt-3" noGutters>
          {products.products.map((product, index) => (
            <Col key={index} className="my-2 p-2">
              <Card className="h-100 p-2">
                <img className="px-2" src={"/" + product.imgName} />
                <Card.Body className="px-3 py-2">
                  <Card.Text>{product.name}</Card.Text>
                </Card.Body>
                <Card.Footer className="px-3 d-flex justify-content-between product">
                  <h5 className="font-weight-bold align-self-center mb-0">
                    {product.price}
                    {" €"}
                  </h5>
                  <Button>Buy</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Shop;
