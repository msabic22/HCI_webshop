import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

import TwoColumns from "../components/twoColumns/twoColumns";
import productsJson from "../json/data.json";
import MyNavbar from "../components/navbar/navbar";

const products = productsJson.currentOrder;
const user = {
  displayName: "User user",
  email: "user.user@gmail.com",
};

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <>
      <MyNavbar></MyNavbar>
      <Container>
        <TwoColumns main="right">
          <div className="order-container d-flex justify-content-between align-items-center bg-secondary font-weight-bold p-3 mt-2">
            <div>
              {"TOTAL : "}
              {products.reduce((prev, cur) => prev + cur.price, 0).toFixed(2)}
              {" €"}
            </div>
            <Button
              variant="dark"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Order now!
            </Button>
          </div>
          <div className="mb-5 pb-5">
            <Row xs={1}>
              {products.map((product, index) => (
                <Col key={index}>
                  <Card className="d-flex flex-row p-2 my-2">
                    <Image
                      src={"/" + product.imgName}
                      style={{ maxWidth: "150px", maxHeigth: "150px" }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between py-4 pr-4">
                      <div className="d-flex flex-row justify-content-between align-items-start">
                        <Card.Title className="font-weight-bold pr-2">
                          {product.name}
                        </Card.Title>
                        <Button variant="danger" className="text-center">
                          X
                        </Button>
                      </div>
                      <Card.Text>
                        <h4 className="text-secondary font-weight-light">
                          {product.price}
                          {" €"}
                        </h4>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Button
              block
              className="my-2"
              variant="outline-danger"
              onClick={() => {
                setShowModal2(true);
              }}
            >
              EMPTY CART
            </Button>
          </div>
        </TwoColumns>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header className="d-flex flex-column">
            <Modal.Title className="font-weight-bold">Receipt</Modal.Title>
            <p className="mt-2">
              {"Recipients name : "}
              {user.displayName}
            </p>
            <p className="mb-0">
              {"Recipients e-mail : "}
              {user.email}
            </p>
          </Modal.Header>
          <Modal.Body className="py-2">
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
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex justify-content-between w-100 my-4 px-4">
              <h5>{"TOTAL : "}</h5>
              <h5>
                {products.reduce((prev, cur) => prev + cur.price, 0).toFixed(2)}
                {" €"}
              </h5>
            </div>
            <div className="d-flex justify-content-between w-100">
              <Button variant="danger" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="success">Order!</Button>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal show={showModal2} onHide={() => setShowModal2(false)}>
          <Modal.Header className="text-center font-weigth-bold">
            Do you realy want to empty your shopping cart?
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-around">
            <Button variant="success" onClick={() => setShowModal2(false)}>
              YES
            </Button>
            <Button variant="danger" onClick={() => setShowModal2(false)}>
              NO
            </Button>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default Cart;
