import React from "react";
import MyNavbar from "../components/navbar/navbar";
import postsJson from "../json/posts.json";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const post = postsJson[0];

const Post = () => {
  return (
    <>
      <MyNavbar></MyNavbar>
      <Container>
        <Row>
          <Col>
            <Card className="p-3">
              <h1>{post.title}</h1>
              <div className="text-muted">{`${post.author}   -   ${post.date}`}</div>
              <div
                className="my-4"
                style={{
                  borderRadius: "0.8rem",
                  height: "150px",
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
              <p className="my-4">{post.description}</p>
              <p>{post.post}</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Post;
