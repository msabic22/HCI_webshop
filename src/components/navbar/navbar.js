import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href.split("/"));
  }, []);
  return (
    <Container fluid className="p-0 mb-5 bg-primary">
      <Container>
        <Navbar bg="primary" variant="dark" className="m-0 p-0">
          <Nav className="d-flex justify-content-between w-100">
            <div>
              <Nav.Link
                href="/shop"
                active={url.includes("shop") ? true : false}
              >
                Shop
              </Nav.Link>
            </div>
            <div className="d-flex">
              <Nav.Link
                href="/blog"
                active={url.includes("blog") ? true : false}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="/profile"
                active={url.includes("profile") ? true : false}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                href="/cart"
                active={url.includes("cart") ? true : false}
              >
                Cart
              </Nav.Link>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </Container>
  );
};

export default MyNavbar;
