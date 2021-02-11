import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const MyNavbar = () => {
  return (
    <Container fluid className="px-0 py-1 mb-5 bg-primary">
      <Container>
        <Navbar bg="primary" variant="dark" className="m-0 p-0">
          <Nav className="d-flex justify-content-between w-100">
            <div>
              <Nav.Link href="/">Shop</Nav.Link>
            </div>
            <div className="d-flex">
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </Container>
  );
};

export default MyNavbar;
