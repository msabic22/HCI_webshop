import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import MyNavbar from "../components/navbar/navbar";
import postsJson from "../json/posts.json";

const Blog = () => {
  return (
    <>
      <MyNavbar></MyNavbar>

      <Container>
        <Row xs={1} md={2}>
          {postsJson.map((post) => (
            <Col className="py-2">
              <Card className="h-100">
                <div
                  style={{
                    height: "150px",
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                ></div>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{`${post.author}   -   ${post.date}`}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Blog;
