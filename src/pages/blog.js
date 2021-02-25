import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MyNavbar from "../components/navbar/navbar";
import postsJson from "../json/posts.json";
import { navigate } from "gatsby";

const Blog = () => {
  return (
    <>
      <MyNavbar></MyNavbar>
      <Container>
        <Row xs={1} md={2}>
          {postsJson.map((post) => (
            <Col className="py-5 px-4">
              <Card className="h-100" onClick={() => navigate("/post")}>
                <div
                  style={{
                    borderRadius: "0.8rem",
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
